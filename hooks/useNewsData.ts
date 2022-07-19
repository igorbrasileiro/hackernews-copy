import { useEffect, useState } from "react";
import { fetchNewsByType, NewsType } from "../api/fetchNewsByType";
import {
  EnhancedNewItemData,
  fetchNewsItem,
  NewsItemData,
} from "../api/fetchNewsItem";

async function fetchNews(
  newsType: NewsType = "topstories"
): Promise<EnhancedNewItemData[]> {
  const newsDataIdList = await fetchNewsByType(newsType)

  const newsDataList = await Promise.allSettled<NewsItemData>(
    newsDataIdList.slice(0, 30).map(fetchNewsItem)
  );

  return newsDataList.map((res) => {
    // ignore this if, it's just because typescript is complaining
    if (res.status !== "fulfilled") {
      return;
    }

    const itemData = res.value;
    const host = itemData.url
      ? new URL(itemData.url).host.replace("www.", "")
      : undefined;

    return { ...itemData, host };
  });
}

export function useNewsData(newsType: NewsType) {
  const [newsData, setNewsData] = useState<EnhancedNewItemData[]>([]);
  useEffect(function fetchNewsData() {
    let cancel = false;
    async function effect() {
      const newsData = await fetchNews(newsType);

      if (cancel) {
        return;
      }

      setNewsData(newsData);
    }

    effect();

    return () => {
      cancel = true;
    };
  }, []);

  return newsData;
}
