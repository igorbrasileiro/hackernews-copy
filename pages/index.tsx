import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import NewsList from '../components/NewsList'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <NewsList />
      </section>
    </Layout>
  )
}
