import Head from 'next/head'

export const MyLayout = ({ children, meta }) => {
  return (
    <div style={{ padding: '30px' }}>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <header>CodeGrid blog</header>
      <div>{children}</div>
    </div>
  )
}
