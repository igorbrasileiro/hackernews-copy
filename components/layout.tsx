import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./section/Footer";
import Header from "./section/Header";

export const siteTitle = "Hacker News";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="sm:m-2">
      <div className="bg-white sm:w-full sm:w-[85%] sm:mx-auto">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="rss"
          />
        </Head>

        <Header />
        <main className="bg-secondary pt-2 px-1 sm:px-[0px]">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
