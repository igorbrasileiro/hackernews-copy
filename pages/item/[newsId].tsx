import Head from "next/head";
import { useRouter } from "next/router";
import CommentRow from "../../components/CommentRow";
import Layout, { siteTitle } from "../../components/layout";
import NewsRow from "../../components/NewsRow";
import { NewsItemData } from "../../sdk/fetchNewsItem";
import { useNewsCommentsData } from "../../sdk/useNewsCommentsData";

function getElementPosition(comments: NewsItemData[], index: number) {
  return document.getElementById(comments[index].id.toString()).offsetTop;
}

function scrollTo(position: number) {
  window.scroll({
    top: position - 10,
    behavior: "smooth",
  });
}

function CommentPage() {
  const router = useRouter();
  const newsItemAndComments = useNewsCommentsData(
    router.query.newsId as string | undefined
  );

  if (!newsItemAndComments) {
    return null;
  }

  const { comments, ...newsItem } = newsItemAndComments;
  const hasGoTo = comments?.length > 1;
  const isJobType = newsItem.type === "job";

  return (
    <Layout>
      <Head>
        <title>
          {newsItem.title} | {siteTitle}
        </title>
      </Head>

      <section className={`pt-1 ${isJobType ? "" : "pl-2"} `}>
        <NewsRow
          {...newsItem}
          title={newsItem.title ?? newsItem.text}
          isLast={false}
          isComment={!isJobType}
          showAuthor={false}
          showIndex={false}
          showComments={false}
        />
        {!isJobType && (
          <div className="font-[monospace] text-[10pt] pt-[12px] pl-[17px] mb-1">
            <textarea
              name="comment"
              aria-label="comment textarea"
              rows={8}
              cols={80}
              className="block border border-[#767676] rounded-[2px] p-[2px] mb-4 h-[126px] w-[90%] sm:w-inherit"
            />
            <button className="block bg-[#f0f0f0] leading-[normal] border border-[#767676] rounded-[3px] py-[1px] px-[6px] h-[21px]">
              add comment
            </button>
          </div>
        )}
      </section>

      {!isJobType && <div className="h-12" />}

      <section className="comment pl-[8px]">
        {comments?.map((comment, index) => {
          const isLast = index === comments.length - 1;
          const isFirst = index === 0;

          const handleGoToPrev =
            isFirst || !hasGoTo
              ? undefined
              : () => {
                  const nextElementPos = getElementPosition(
                    comments,
                    index - 1
                  );
                  scrollTo(nextElementPos);
                };

          const handleGoToNext =
            isLast || !hasGoTo
              ? undefined
              : () => {
                  const nextElementPos = getElementPosition(
                    comments,
                    index + 1
                  );
                  scrollTo(nextElementPos);
                };

          return (
            <CommentRow
              key={comment.id}
              {...comment}
              goToNext={handleGoToNext}
              goToPrev={handleGoToPrev}
            />
          );
        })}
      </section>

      <div className="h-8" />
    </Layout>
  );
}

export default CommentPage;
