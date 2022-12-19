import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { H2Heading } from '../components/H2Heading.jsx'

const components = {
  h2: H2Heading,
}

export const MyLayout = ({ meta, children }) => {
  return (
    <div style={{ padding: '30px' }}>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}
