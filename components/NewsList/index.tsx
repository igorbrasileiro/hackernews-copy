import { useNewsData } from "../../sdk/useNewsData";
import UpArrow from "../../public/images/grayarrow.gif";
import { timeAgo } from "../../utils/timeAgo";

const dateNow = Date.now();

function NewsList() {
  const newsData = useNewsData();

  return newsData.map(
    ({ title, url, host, score, by, time, descendants }, index) => {
      return (
        <div
          key={index}
          className={`text-[#828282] text-[10pt] leading-[normal] flex ${
            index !== newsData.length - 1 ? "mb-[5px]" : ""
          }`}
        >
          {/* TODO: Using fixed width. fix it */}
          <div className="flex justify-end items-center w-[34px] h-[19px]">
            <span>{index + 1}.</span>
            <span className="pl-[2px] cursor-pointer">
              <img src={UpArrow.src} width={10} height={10} />
            </span>
          </div>

          <div className="pl-[2px] flex flex-col">
            {/* Title Row */}
            <div className="h-[19px] pt-[3px]">
              <a className="text-black visited:text-[#828282]" href={url}>
                {title}
              </a>
              <span className="text-[8pt] pl-[2px]">
                (
                <a className="hover:underline" href={host}>
                  {host}
                </a>
                )
              </span>
            </div>

            {/* Info Row */}
            <div className="text-[7pt]">
              {score} points by <span className="hover:underline">{by}</span>{" "}
              <span
                className="hover:underline cursor-pointer"
                title={new Date(time).toISOString()}
              >
                {timeAgo(dateNow, time * 1_000)}
              </span>
              {" | "}
              <span className="hover:underline cursor-pointer">hide</span>
              {" | "}
              <a className="hover:underline cursor-pointer">
                {descendants} comments
              </a>
            </div>
          </div>
        </div>
      );
    }
  );
}

export default NewsList;
