import Head from "next/head";
import { PropsWithChildren } from "react";

export const siteTitle = "Hackernews";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="lg:m-2">
      <div className="bg-white sm:w-full lg:w-[85%] lg:mx-auto">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="rss"
          />
        </Head>

        <header>{/* Header goes here */}</header>
        <main>{children}</main>
        <footer>{/* Footer goes here */}</footer>
      </div>
    </div>
  );
}
