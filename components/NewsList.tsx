import { NewsType, useNewsData } from "../sdk/useNewsData";
import NewRow from "./NewsRow";

interface Props {
  newsType: NewsType
}

function NewsList({ newsType }: Props) {
  const newsData = useNewsData(newsType);

  return (
    <>
      {newsData.map((newsItemData, index) => {
        return (
          <NewRow
            key={index}
            {...newsItemData}
            isLast={index === newsData.length - 1}
            index={index + 1}
          />
        );
      })}
    </>
  );
}

export default NewsList;
