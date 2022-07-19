export interface NewsItemData {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: "story" | "job" | "comment" | "poll" | "pollopt";
  url: string;
  text?: string
}

export interface EnhancedNewItemData extends NewsItemData {
  host?: string
}

export async function fetchNewsItem(newsId: number | string): Promise<NewsItemData> {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`).then(
    (res) => res.json()
  );
}