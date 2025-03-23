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
      <main className='flex flex-col items-center !px-4' >
        <section className=" flex flex-col items-center  md:w-5/10">
          {news.length > 0 ? (
            news.map((item, index) => (
              <div className="!my-2 !p-4 bg-gray-800 rounded-xl" key={index}>
                <h2>{item.content}</h2>
                <p>{item.description}</p>
                <div>
                <img src={item.urlToImg} alt={'IMG'} />

                </div>
                <p><strong>Publicado em:</strong> {new Date(item.publishedAt).toLocaleDateString()}</p>
                <p className="!m-2">
                  <Link to={item.url}> Ler mais...</Link>
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
