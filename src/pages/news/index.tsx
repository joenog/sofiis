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
      <main className="flex flex-col items-center w-full !px-4">
        <h2 className="!ml-2 w-full max-w-[900px]">News</h2>
        <section className="flex justify-center flex-wrap gap-4 w-full max-w-[900px]">
            {news.length > 0 ? (
              news.map((news, index) => (
                <div className="flex flex-col max-w-[440px] !p-4 bg-gray-900 rounded-xl" key={index}>
                  <h2> {news.title} </h2>
                  <p> {news.description} </p>
                  <div>
                    <img  
                      className="rounded-xl !my-2 h-48 w-full object-cover" 
                      src={news.urlToImage} 
                      alt="image-news" 
                    />
                  </div>
                  <p><strong>Publicado em:</strong> {new Date(news.publishedAt).toLocaleDateString()}</p>
                  <p className="self-end">
                    <Link className="!p-2 !py-1 rounded-xl bg-gray-700" target="blanck" to={news.url}> Ler mais...</Link>
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
