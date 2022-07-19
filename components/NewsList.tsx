import { NewsType, useNewsData } from "../sdk/useNewsData";
import NewsRow from "./NewsRow";

interface Props {
  newsType: NewsType
  showHideNews?: boolean
  showIndex?: boolean
  showAuthor?: boolean
  showComments?: boolean
}

function NewsList({ newsType, showIndex, showAuthor, showComments, showHideNews }: Props) {
  const newsData = useNewsData(newsType);

  return (
    <>
      {newsData.map((newsItemData, index) => {
        return (
          <NewsRow
            key={index}
            {...newsItemData}
            isLast={index === newsData.length - 1}
            index={index + 1}
            showHideNews={showHideNews}
            showIndex={showIndex}
            showAuthor={showAuthor}
            showComments={showComments}
          />
        );
      })}
    </>
  );
}

export default NewsList;
