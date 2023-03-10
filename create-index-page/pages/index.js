import { promises as fs } from 'node:fs'

import Head from 'next/head'
import News from '../contents/news.mdx'

export const getStaticProps = async () => {
  const dataDir = 'articles'
  const fileNames = await fs.readdir(dataDir)
  const posts = []
  for (const fileName of fileNames) {
    const { meta } = await import(`../articles/${fileName}`)
    const slug = fileName.replace(/\.mdx$/, '')
    posts.push({ slug: slug, meta: meta })
  }
  return {
    props: { posts },
  }
}

const userName = 'ピクセル グリオ'

export default function Home({ posts }) {
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
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <a href={post.slug}>{post.meta.title}</a>
              </li>
            )
          })}
        </ul>
        <h2>お知らせ</h2>
        <News userName={userName} />
      </main>
    </>
  )
}
