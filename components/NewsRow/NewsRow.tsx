import { EnhancedNewItemData } from "../../sdk/fetchNewsItem";
import { timeAgo } from "../../utils/timeAgo";
import UpArrow from "../../public/images/grayarrow.gif";
import Link from "next/link";
import FakeAnchor from "../ui/FakeAnchor";

function getComments(descendants: number) {
  switch(descendants) {
    case 0:
      return 'discuss'
    case 1:
      return '1 comment'
    default:
      return `${descendants} comments`
  }
}

interface Props extends EnhancedNewItemData {
  index?: number;
  isLast: boolean;
  isComment?: boolean;
  showHideNews?: boolean;
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
  showHideNews = true,
  showIndex = true,
  showAuthor = true,
  showComments = true,
}: Props) {
  return (
    <div
      id={id.toString()}
      className={`text-[#828282] text-[11pt] leading-[14pt] sm:text-[10pt] sm:leading-[normal] flex ${
        !isLast ? "sm:mb-[4px]" : ""
      }`}
    >
      {/* TODO: Using fixed width. fix it */}
      {showIndex && (
        <div
          className={`flex justify-end items-center ${
            !isComment ? "min-w-[33px]" : ""
          } h-[19px]`}
        >
          {!isComment && <span>{index}.</span>}
          <span className="pl-[2px] cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="up arrow" src={UpArrow.src} width={10} height={10} />
          </span>
        </div>
      )}
      {!showIndex && <div className="pl-[12px]" />}

      <div className={`flex flex-col ${isComment ? "pl-1" : "pl-[2px]"}`}>
        {/* Title Row */}
        <div className={`pt-[3px] ${isComment ? "mb-1" : "mb-[1px]"}`}>
          {!isComment && <a className="text-black visited:text-[#828282]" href={url}>
            {title}
          </a>}
          {isComment && <span className="text-black text-[9pt]" dangerouslySetInnerHTML={{ __html: title }} />}
          {host && (
            <span className="text-[8pt] pl-[2px]">
              (
              <a className="hover:underline" href={url}>
                {host}
              </a>
              )
            </span>
          )}
        </div>

        {/* Info Row */}
        <div className="text-[9pt] sm:text-[7pt]">
          {showAuthor && (
            <>
              <span>{score}</span> points by <FakeAnchor>{by}</FakeAnchor>{" "}
            </>
          )}

          <Link href={`/item/${id}`}>
            <a className="hover:underline" title={new Date(time).toISOString()}>
              {timeAgo(time * 1_000)}
            </a>
          </Link>

          {showHideNews && " | "}
          {showHideNews && (
            <FakeAnchor>hide</FakeAnchor>
          )}

          {isComment && " | "}
          {isComment && (
            <FakeAnchor>past</FakeAnchor>
          )}
          {isComment && " | "}
          {isComment && (
            <FakeAnchor>favorite</FakeAnchor>
          )}

          {showComments && " | "}
          {showComments && (
            <Link href={`/item/${id}`}>
              <a className="hover:underline">
                {getComments(descendants)} 
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsRow;
