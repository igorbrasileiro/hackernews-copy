import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NewsList from "../components/NewsList";
import A from "../components/ui/Anchor";
import Warning from "../components/section/Warning";

function Show() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Warning>
          Please read the{" "}
          <A href="https://news.ycombinator.com/showhn.html">rules</A>. You can
          also browse the newest{" "}
          <A href="https://news.ycombinator.com/shownew">Show HNs</A>.
        </Warning>
        <NewsList newsType="showstories" />
        <div className="block h-[10px]" />
        <button className="text-[10pt] leading-[normal] pl-[34px]">More</button>
        <div className="block h-[10px]" />
      </section>
    </Layout>
  );
}

export default Show;
