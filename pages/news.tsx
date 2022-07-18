import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NewsList from "../components/NewsList";

function News() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <NewsList newsType="topstories" />
        <div className="block h-[10px]" />
        <button className="text-[10pt] leading-[normal] pl-[34px]">More</button>
        <div className="block h-[10px]" />
      </section>
    </Layout>
  );
}

export default News