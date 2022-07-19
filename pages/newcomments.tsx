import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

function NewComments() {
  return (
    <Layout>
      <Head>
        <title>New Comments | {siteTitle}</title>
      </Head>
      <section>
      TODO: Find API to get new comments
        {/* https://hackernews.api-docs.io/v0/overview/introduction */}
        {/* https://github.com/HackerNews/API */}
        <div className="block h-[10px]" />
        <button className="text-[10pt] leading-[normal] pl-[34px]">More</button>
        <div className="block h-[10px]" />
      </section>
    </Layout>
  );
}


export default NewComments