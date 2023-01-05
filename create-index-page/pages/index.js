import Head from 'next/head'

import News from '../contents/news.mdx'

export default function Home() {
  return (
    <>
      <Head>
        <title>MDX demo blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>新着記事</h2>
        <h2>お知らせ</h2>
        <News />
      </main>
    </>
  )
}
