export type NewsType =
  | "topstories"
  | "newstories"
  | "beststories"
  | "askstories"
  | "showstories"
  | "jobstories";

export async function fetchNewsByType(newsType: NewsType) {
  return fetch(
    `https://hacker-news.firebaseio.com/v0/${newsType}.json`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((res) => res.json());
}