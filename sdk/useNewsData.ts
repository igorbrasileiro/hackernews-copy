import { useEffect, useState } from "react";
import { fetchNewsItem, NewsItemData } from "./fetchNewsItem";


export interface EnhancedNewItemData extends NewsItemData {
  host?: string
}

async function fetchNews(): Promise<EnhancedNewItemData[]> {
  const newsDataIdList = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
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

export function useNewsData() {
  const [newsData, setNewsData] = useState<EnhancedNewItemData[]>([]);
  useEffect(function fetchNewsData() {
    let cancel = false;
    async function effect() {
      const newsData = await fetchNews();

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
