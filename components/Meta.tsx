import Head from "next/head";

export default function Meta({ title = "まるやきブログ", description = "This is my Blog" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
