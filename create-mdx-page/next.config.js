/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  // デフォルトでは .tsx, .ts, .jsx, .js なので、
  // .mdと.mdxファイルからもページを生成できるようにする。
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],

  //最初から設定されているオプション
  reactStrictMode: true,
})
