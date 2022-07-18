import { useEffect, useState } from "react";
import { fetchNewsItem, NewsItemData } from "./fetchNewsItem";
import type { EnhancedNewItemData } from "./fetchNewsItem";

interface NewsItemWithComments extends EnhancedNewItemData {
  comments?: NewsItemData[];
}

async function fetchNewsItemAndComments(
  newsId: string
): Promise<NewsItemWithComments> {
  const newsItem = await fetchNewsItem(newsId);

  if (!newsItem) {
    throw new Error(`Item with id "${newsId}" was not found`);
  }

  const comments = newsItem.kids
    ? await Promise.allSettled(newsItem.kids.slice(0, 5).map(fetchNewsItem))
    : undefined;

  const host = newsItem.url
    ? new URL(newsItem.url).host.replace("www.", "")
    : undefined;

  return {
    ...newsItem,
    host,
    comments: comments?.map((commentRes) => {
      if (commentRes.status !== "fulfilled") {
        return;
      }

      return commentRes.value;
    }),
  };
}

export function useNewsCommentsData(newsId?: string) {
  const [newsData, setNewsData] = useState<NewsItemWithComments>();

  useEffect(
    function fetchNewsData() {
      if (!newsId) {
        return;
      }

      let cancel = false;
      async function effect() {
        const newsData = await fetchNewsItemAndComments(newsId);

        if (cancel) {
          return;
        }

        setNewsData(newsData);
      }

      effect();

      return () => {
        cancel = true;
      };
    },
    [newsId]
  );

  return newsData;
}
