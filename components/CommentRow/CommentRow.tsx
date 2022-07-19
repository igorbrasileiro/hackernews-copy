import { EnhancedNewItemData } from "../../api/fetchNewsItem";
import UpArrow from "../../public/images/grayarrow.gif";
import { timeAgo } from "../../utils/timeAgo";
import { useState } from "react";
import Link from "next/link";

interface Props extends EnhancedNewItemData {
  goToNext?: () => void;
  goToPrev?: () => void;
}

function CommentRow({ by, time, text, id, goToNext, goToPrev }: Props) {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div
      id={id.toString()}
      className="text-[#828282] leading-[normal] flex mb-2"
    >
      <div className="pl-[2px] pt-1 min-h-[14px] min-w-[12px]">
        <span className="block cursor-pointer h-[10px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="up arrow" src={UpArrow.src} width={10} height={10} />
        </span>
      </div>

      <div className="flex flex-col pl-[4px] pt-[3px]">
        {/* Comment Info */}
        <div className="text-[8pt] mb-2">
          {by}{" "}
          <Link href={`/item/${id}`}>
            <a className="hover:underline" title={new Date(time).toISOString()}>
              {timeAgo(time * 1_000)}
            </a>
          </Link>
          {goToPrev && (
            <>
              {" | "}
              <button className="hover:underline" onClick={goToPrev}>
                prev
              </button>
            </>
          )}
          {goToNext && (
            <>
              {" | "}
              <button className="hover:underline" onClick={goToNext}>
                next
              </button>
            </>
          )}{" "}
          <button
            data-testid="hide-button"
            className="hover:underline"
            onClick={() => setCollapse(!collapse)}
          >
            [{collapse ? "+" : "-"}]
          </button>
        </div>

        {/* Comment */}
        {!collapse && (
          <div className="text-black text-[9pt] mb-2">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        )}

        {!collapse && (
          <div className="underline cursor-pointer text-black text text-[10px]">
            reply
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentRow;
