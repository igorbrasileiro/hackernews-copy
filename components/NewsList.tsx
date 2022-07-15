import { useNewsData } from "../sdk/useNewsData";
import NewRow from "./NewsRow";

function NewsList() {
  const newsData = useNewsData();

  return (
    <>
      {newsData.map((newsItemData, index) => {
        return (
          <NewRow
            key={index}
            {...newsItemData}
            isLast={index !== newsData.length - 1}
            index={index + 1}
          />
        );
      })}
    </>
  );
}

export default NewsList;
