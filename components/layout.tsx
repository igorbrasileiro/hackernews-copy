import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./section/Footer";
import Header from "./section/Header";

export const siteTitle = "Hacker News";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="md:m-2">
      <div className="bg-white sm:w-full md:w-[85%] md:mx-auto">
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
        <main className="bg-secondary pt-2">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
