import { EnhancedNewItemData } from "../sdk/useNewsData";
import { timeAgo } from "../utils/timeAgo";
import UpArrow from "../public/images/grayarrow.gif";

const DATE_NOW = Date.now();

interface Props extends EnhancedNewItemData {
  index: number;
  isLast: boolean;
}

function NewsRow({
  title,
  url,
  host,
  score,
  by,
  time,
  descendants,
  index,
  isLast,
}: Props) {
  return (
    <div
      className={`text-[#828282] text-[10pt] leading-[normal] flex ${
        !isLast ? "mb-[5px]" : ""
      }`}
    >
      {/* TODO: Using fixed width. fix it */}
      <div className="flex justify-end items-center w-[33px] h-[19px]">
        <span>{index}.</span>
        <span className="pl-[2px] cursor-pointer">
          <img src={UpArrow.src} width={10} height={10} />
        </span>
      </div>

      <div className="flex flex-col pl-[2px]">
        {/* Title Row */}
        <div className="h-[19px] pt-[3px] mb-[1px]">
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
            {timeAgo(DATE_NOW, time * 1_000)}
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

export default NewsRow;
