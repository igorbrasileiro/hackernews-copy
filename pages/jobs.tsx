import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NewsList from "../components/NewsList";
import A from "../components/ui/Anchor";
import Warning from "../components/section/Warning";

function Jobs() {
  return (
    <Layout>
      <Head>
        <title>Jobs | {siteTitle}</title>
      </Head>
      <section>
        <Warning className="pl-[14px]">
          These are jobs at YC startups. See more at{" "}
          <A href="https://www.ycombinator.com/jobs">ycombinator.com/jobs</A>.
        </Warning>
        <NewsList
          newsType="jobstories"
          showIndex={false}
          showHideNews={false}
          showAuthor={false}
          showComments={false}
        />
        <div className="block h-[10px]" />
        <button className="text-[10pt] leading-[normal] pl-[14px]">More</button>
        <div className="block h-[10px]" />
      </section>
    </Layout>
  );
}

export default Jobs;
