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
    const cachedNews = localStorage.getItem("NewsCache");

    if (cachedNews) {
      setNews(JSON.parse(cachedNews));
    } else {
      const apiNews = async () => {
        try {
          const response = await fetchApiNews();
          const data = response?.data as ApiNewsProps;

          if (data?.articles) {
            setNews(data.articles);
            localStorage.setItem("NewsCache", JSON.stringify(data.articles));
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
      localStorage.removeItem("NewsCache");
    }, 43200000);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <>
      <main
        style={{ animation: "changeColor .8s" }}
        className="flex flex-col items-center w-full !px-4"
      >
        <h2 className="!ml-2 w-full max-w-[900px]">News</h2>
        <section className="flex justify-center  !mb-20 flex-wrap gap-4 max-w-[900px]">
          <div
              className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
            >
              <div>
                <img
                  className="rounded-md h-48 w-full object-cover"
                  src={"https://www.infomoney.com.br/wp-content/uploads/2024/08/Captura-de-tela-2024-08-15-092239.png?quality=70"}
                  alt="image-news"
                />
              </div>
              <div className="flex flex-col !p-3">
                <h2>
                  {"Ibovespa fecha em queda com ajustes e balanços após renovar máximas"}
                </h2>
                <p className="!ml-1 text-xs">
                  Publicado em:{" 25/05/2025"}
                </p>

                <p className="self-end">
                  <Link
                    className="!px-3 !py-1 rounded-xl bg-gray-700"
                    target="blanck"
                    to={"https://www.infomoney.com.br/mercados/ibovespa-opera-com-indefinicao-apos-recorde-na-vespera/"}
                  >
                    {" "}
                    ler mais
                  </Link>
                </p>
              </div>
          </div>

          <div
              className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
            >
              <div>
                <img
                  className="rounded-md h-48 w-full object-cover"
                  src={"https://www.infomoney.com.br/wp-content/uploads/2024/10/2024-10-22T182916Z_1_LYNXMPEK9L0P6_RTROPTP_4_USA-STOCKS-red.jpg?quality=70"}
                  alt="image-news"
                />
              </div>
              <div className="flex flex-col !p-3">
                <h2>
                  {"Eletrobras espera menor descolamento de preço de energia entre regiões no 2º semestre"}
                </h2>
                <p className="!ml-1 text-xs">
                  Publicado em:{" 25/05/2025"}
                </p>

                <p className="self-end">
                  <Link
                    className="!px-3 !py-1 rounded-xl bg-gray-700"
                    target="blanck"
                    to={"https://www.infomoney.com.br/mercados/eletrobras-espera-menor-descolamento-de-preco-de-energia-entre-regioes-no-2o-semestre/"}
                  >
                    {" "}
                    ler mais
                  </Link>
                </p>
              </div>
          </div>

          <div
              className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
            >
              <div>
                <img
                  className="rounded-md h-48 w-full object-cover"
                  src={"https://www.infomoney.com.br/wp-content/uploads/2025/03/money-2387280_1280-1-1.jpg?quality=70"}
                  alt="image-news"
                />
              </div>
              <div className="flex flex-col !p-3">
                <h2>
                  {"Caixa libera abono salarial para nascidos em maio e junho"}
                </h2>
                <p className="!ml-1 text-xs">
                  Publicado em:{" 22/05/2025"}
                </p>

                <p className="self-end">
                  <Link
                    className="!px-3 !py-1 rounded-xl bg-gray-700"
                    target="blanck"
                    to={"https://www.infomoney.com.br/minhas-financas/caixa-libera-abono-salarial-para-nascidos-em-maio-e-junho/"}
                  >
                    {" "}
                    ler mais
                  </Link>
                </p>
              </div>
          </div>

          <div
              className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
            >
              <div>
                <img
                  className="rounded-md h-48 w-full object-cover"
                  src={"https://www.infomoney.com.br/wp-content/uploads/2025/05/Captura-de-Tela-2025-05-05-as-09.20.22.png?quality=70"}
                  alt="image-news"
                />
              </div>
              <div className="flex flex-col !p-3">
                <h2>
                  {"INSS: 473,9 mil segurados já contestaram descontos indevidos"}
                </h2>
                <p className="!ml-1 text-xs">
                  Publicado em:{" 24/05/2025"}
                </p>

                <p className="self-end">
                  <Link
                    className="!px-3 !py-1 rounded-xl bg-gray-700"
                    target="blanck"
                    to={"https://www.infomoney.com.br/minhas-financas/inss-4739-mil-segurados-ja-contestaram-descontos-indevidos/"}
                  >
                    {" "}
                    ler mais
                  </Link>
                </p>
              </div>
          </div>

          <div
              className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
            >
              <div>
                <img
                  className="rounded-md h-48 w-full object-cover"
                  src={"https://www.infomoney.com.br/wp-content/uploads/2024/06/petrobras-reuters.jpg?quality=70"}
                  alt="image-news"
                />
              </div>
              <div className="flex flex-col !p-3">
                <h2>
                  {"EPetroleiros planejam greve após Petrobras anunciar austeridade por queda do petróleo"}
                </h2>
                <p className="!ml-1 text-xs">
                  Publicado em:{" 25/05/2025"}
                </p>

                <p className="self-end">
                  <Link
                    className="!px-3 !py-1 rounded-xl bg-gray-700"
                    target="blanck"
                    to={"https://www.infomoney.com.br/mercados/petroleiros-planejam-greve-apos-petrobras-anunciar-austeridade-por-queda-do-petroleo/"}
                  >
                    {" "}
                    ler mais
                  </Link>
                </p>
              </div>
          </div>
        </section>
        <section className="flex justify-center flex-wrap gap-4 max-w-[900px]">
          {news.length > 0 ? (
            news.map((news, index) => (
              <div
                className="flex w-full flex-col max-w-[440px]  bg-gray-900 rounded-xl"
                key={index}
              >
                <div>
                  <img
                    className="rounded-md h-48 w-full object-cover"
                    src={news.urlToImage || "Imagem não disponível."}
                    alt="image-news"
                  />
                </div>
                <div className="flex flex-col !p-3">
                  <h2>
                    {" "}
                    {news.title || (
                      <span className="text-gray-500">
                        Título não encontrado...
                      </span>
                    )}{" "}
                  </h2>
                  <p className="!ml-1 text-xs">
                    Publicado em:{" "}
                    {new Date(news.publishedAt).toLocaleDateString() ||
                      "Data não definida."}
                  </p>
                  <p className="self-end">
                    <Link
                      className="!px-3 !py-1 rounded-xl bg-gray-700"
                      target="blanck"
                      to={news.url}
                    >
                      {" "}
                      ler mais
                    </Link>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </section>  
        */
      </main>
      <FloatingMenu />
    </>
  );
}
