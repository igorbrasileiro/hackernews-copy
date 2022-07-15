import Head from "next/head";
import { useRouter } from "next/router";
import CommentRow from "../../components/CommentRow";
import Layout, { siteTitle } from "../../components/layout";
import NewsRow from "../../components/NewsRow";
import { useNewsCommentsData } from "../../sdk/useNewsCommentsData";

function CommentPage() {
  const router = useRouter();
  const newsItemAndComments = useNewsCommentsData(
    router.query.newsId as string | undefined
  );

  if (!newsItemAndComments) {
    return null;
  }

  const { comments, ...newsItem } = newsItemAndComments;

  return (
    <Layout>
      <Head>
        <title>
          {newsItem.title} | {siteTitle}
        </title>
      </Head>

      <section className="pt-1 pl-2">
        <NewsRow isLast={false} isComment {...newsItem} />
        <div className="font-[monospace] text-[10pt] pt-[12px] pl-[17px] mb-1">
          <textarea
            name="comment"
            aria-label="comment textarea"
            rows={8}
            cols={80}
            className="block border border-[#767676] rounded-[2px] p-[2px] mb-4 h-[126px]"
          />
          <button className="block bg-[#f0f0f0] leading-[normal] border border-[#767676] rounded-[3px] py-[1px] px-[6px] h-[21px]">
            add comment
          </button>
        </div>
      </section>

      <div className="h-12" />

      <section className="comment pl-[8px]">
        {comments.map((comment) => {
          return <CommentRow key={comment.id} {...comment} />;
        })}
      </section>
      
      <div className="h-8" />
    </Layout>
  );
}

export default CommentPage;
