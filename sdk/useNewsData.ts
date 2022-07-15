import { useEffect, useState } from "react";
import {
  EnhancedNewItemData,
  fetchNewsItem,
  NewsItemData,
} from "./fetchNewsItem";

export type NewsType =
  | "topstories"
  | "newstories"
  | "beststories"
  | "askstories"
  | "showstories"
  | "jobstories";

async function fetchNews(
  newsType: NewsType = "topstories"
): Promise<EnhancedNewItemData[]> {
  const newsDataIdList = await fetch(
    `https://hacker-news.firebaseio.com/v0/${newsType}.json`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((res) => res.json());

  const newsDataList = await Promise.allSettled<NewsItemData>(
    newsDataIdList.slice(0, 30).map(fetchNewsItem)
  );

  return newsDataList.map((res) => {
    // ignore this if, it's just because typescript is complaining
    if (res.status !== "fulfilled") {
      return;
    }

    const itemData = res.value;
    const host = itemData.url ? new URL(itemData.url).host : undefined;

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
