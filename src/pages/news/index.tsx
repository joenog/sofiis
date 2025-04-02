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
    const cachedNews = localStorage.getItem('NewsCache');

    if (cachedNews) {
      setNews(JSON.parse(cachedNews));
    } else {
      const apiNews = async () => {
        try {
          const response = await fetchApiNews();
          const data = response?.data as ApiNewsProps; 
          
          if (data?.articles) {
            setNews(data.articles);
            localStorage.setItem('NewsCache', JSON.stringify(data.articles));
          } else {
            console.error("Formato inesperado da resposta", response);
          }
        } catch (err) {
          console.error("Erro ao buscar notícias", err);
        }
      };
      
      apiNews();
    }

    const timeoutID = setTimeout(() => {
      localStorage.removeItem("NewsCache")
    }, 43200000);

    return () => clearTimeout(timeoutID);
    
  }, []);

  return (
    <>
      <main className="flex flex-col items-center w-full !px-4">
        <h2 className="!ml-2 w-full max-w-[900px]">News</h2>
        <section className="flex justify-center flex-wrap gap-4 max-w-[900px]">
            {news.length > 0 ? (
              news.map((news, index) => (
                <div className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl" key={index}>
                  <div>
                    <img  
                      className="rounded-md h-48 w-full object-cover" 
                      src={news.urlToImage || 'Imagem não disponível.'} 
                      alt="image-news" 
                    />
                  </div>
                  <div className="flex flex-col !p-3">
                    <h2> {news.title || <span className="text-gray-500">Título não encontrado...</span>}  </h2>
                    <p className="!ml-1 text-xs" >Publicado em: {new Date(news.publishedAt).toLocaleDateString() || 'Data não definida.'}</p>
                    <p className="self-end">
                      <Link className="!px-3 !py-1 rounded-xl bg-gray-700" target="blanck" to={news.url}> ler mais</Link>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
        </section>

      </main>
      <FloatingMenu />
    </>
  );
}
