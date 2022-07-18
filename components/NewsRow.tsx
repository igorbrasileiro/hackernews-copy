import { EnhancedNewItemData } from "../sdk/fetchNewsItem";
import { timeAgo } from "../utils/timeAgo";
import UpArrow from "../public/images/grayarrow.gif";
import Link from "next/link";

interface Props extends EnhancedNewItemData {
  index?: number;
  isLast: boolean;
  isComment?: boolean;
  hideNews?: boolean;
  showIndex?: boolean;
  showAuthor?: boolean;
  showComments?: boolean;
}

function NewsRow({
  id,
  title,
  url,
  host,
  score,
  by,
  time,
  descendants,
  index,
  isLast,
  isComment,
  hideNews = true,
  showIndex = true,
  showAuthor = true,
  showComments = true,
}: Props) {
  return (
    <div
      id={id.toString()}
      className={`text-[#828282] text-[10pt] leading-[normal] flex ${
        !isLast ? "mb-[4px]" : ""
      }`}
    >
      {/* TODO: Using fixed width. fix it */}
      {showIndex && (
        <div
          className={`flex justify-end items-center ${
            !isComment ? "w-[33px]" : ""
          } h-[19px]`}
        >
          {!isComment && <span>{index}.</span>}
          <span className="pl-[2px] cursor-pointer">
            <img src={UpArrow.src} width={10} height={10} />
          </span>
        </div>
      )}
      {!showIndex && <div className="pl-[12px]" />}

      <div className={`flex flex-col ${isComment ? "pl-1" : "pl-[2px]"}`}>
        {/* Title Row */}
        <div className={`h-[19px] pt-[3px] ${isComment ? "mb-1" : "mb-[1px]"}`}>
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
          {showAuthor && (
            <>
              {score} points by <span className="hover:underline">{by}</span>{" "}
            </>
          )}

          <Link href={`/item/${id}`}>
            <a className="hover:underline" title={new Date(time).toISOString()}>
              {timeAgo(time * 1_000)}
            </a>
          </Link>

          {hideNews && " | "}
          {hideNews && (
            <span className="hover:underline cursor-pointer">hide</span>
          )}

          {isComment && " | "}
          {isComment && (
            <span className="hover:underline cursor-pointer">past</span>
          )}
          {isComment && " | "}
          {isComment && (
            <span className="hover:underline cursor-pointer">favorite</span>
          )}

          {showComments && " | "}
          {showComments && (
            <Link href={`/item/${id}`}>
              <a className="hover:underline cursor-pointer">
                {descendants} comments
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsRow;
