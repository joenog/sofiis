import { useEffect, useState } from "react";
import { FloatingMenu } from "../../components/floatingMenu";
import { fetchApiNews } from "../../services/api/apiNews";
import { ApiNewsProps } from "../../types/apiNews/ApiNewsProps";
import { NewsProps } from "../../types/apiNews/NewsProps";
import Loading from "../../components/loading";
import { Link } from "react-router-dom";

export function News() {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    const apiNews = async () => {
      try {
        const response = await fetchApiNews();
        const data = response?.data as ApiNewsProps; 

        if (data?.articles) {
          setNews(data.articles);
        } else {
          console.error("Formato inesperado da resposta", response);
        }
      } catch (err) {
        console.error("Erro ao buscar notícias", err);
      }
    };

    apiNews();
  }, []);

  return (
    <>
      <main className="flex w-full justify-center px-4">
       <section className="grid grid-cols-1 md:grid-cols-2 !mx-4 gap-4 w-full max-w-[880px]">
          <h2>Notícias</h2>
          {news.length > 0 ? (
            news.map((news, index) => (
              <div className=" !p-4 bg-gray-900 rounded-xl" key={index}>
                <h2>{news.title}</h2>
                <p>{news.description}</p>
                <div>
                  <img height={800} width={800} className="rounded-xl !my-2 h-48" src={news.urlToImage} alt={'image-news'} />
                </div>
                <p><strong>Publicado em:</strong> {new Date(news.publishedAt).toLocaleDateString()}</p>
                <p className="!m-2 font-semibold">
                  <Link className=" !px-4 !py-1 rounded-xl bg-gray-900" target="blanck" to={news.url}> Ler mais...</Link>
                </p>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </section>

        <FloatingMenu />
      </main>
    </>
  );
}
