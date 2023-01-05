import dynamic from 'next/dynamic'
import { promises as fs } from 'node:fs'
import { MyLayout } from '../layouts/MyLayout.jsx'

const page = ({ slug, meta }) => {
  const Content = dynamic(import(`../articles/${slug}.mdx`))
  return (
    <MyLayout meta={meta}>
      <Content />
    </MyLayout>
  )
}

export const getStaticPaths = async () => {
  const dataDir = 'articles'
  const fileNames = await fs.readdir(dataDir)
  const files = fileNames.map((fileName) => {
    return {
      fileName: fileName,
    }
  })

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.fileName.replace(/\.mdx$/, ''),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const data = await import(`../articles/${slug}.mdx`)
  return {
    props: {
      slug: slug,
      meta: data.meta,
    },
  }
}

export default page
