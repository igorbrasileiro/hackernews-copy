import { useEffect, useState } from "react";

interface NewItemData {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story" | "job" | "comment" | "poll" | "pollopt";
  url: string;
}

async function fetchNewItem(newId: number) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${newId}.json`).then(
    (res) => res.json()
  );
}

async function fetchNews() {
  const newsDataIdList = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
    {
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((res) => res.json());

  const newsDataList = await Promise.allSettled<NewItemData>(
    newsDataIdList.slice(0, 30).map(fetchNewItem)
  );

  return newsDataList.map(({ value }: any) => value);
}

export function useNewsData() {
  const [newsData, setNewsData] = useState([]);
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

  return newsData
}