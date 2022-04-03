import { client } from "../libs/client"
import type { Article } from "../types/article";
import Link from 'next/link';
import Meta from '../components/Meta';

type Props = {
  articles: Array<Article>;
};


export default function Home({ articles }: Props) {
  return (
    <>
      <Meta />
      <h1 className="text-xl font-yusei container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div>

      </div>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles.map(article => (
          <div className="rounded overflow-hidden shadow-lg" key={article.id}>
            <Link href={`/article/${article.id}`} passHref>
              <img
                className="w-full"
                src={article.eye_catch.url}
                alt="eye catch image"
              />
            </Link>
            <Link href={`/article/${article.id}`} passHref>
              <div className="px-6 py-4">
                <a>{article.title}</a>
              </div>
            </Link>

            <div className="px-6 pt-4 pb-2">
              {article.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{article.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
