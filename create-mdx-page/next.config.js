/** @type {import('next').NextConfig} */
const remarkHeadingId = require('remark-heading-id')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHeadingId], //追加
  },
})
module.exports = withMDX({
  // デフォルトでは .tsx, .ts, .jsx, .js なので、
  // .mdと.mdxファイルからもページを生成できるようにする。
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],

  //最初から設定されているオプション
  reactStrictMode: true,
})
