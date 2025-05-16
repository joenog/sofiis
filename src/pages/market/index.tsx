import { FloatingMenu } from "../../components/floatingMenu";
import { FaBuilding, FaStar } from "react-icons/fa";
import { useAllFiis } from "../../services/api/useAllFiis";
import fii11 from "../../assets/fii11.svg";
import useFavFiis from "../../data/favFiis";

export function Market() {
  const { data, error } = useAllFiis();
  const { favFiis, setFavFiis } = useFavFiis();

  function toggleFavFii(fiiToToggle: string) {
  if (favFiis.includes(fiiToToggle)) {
    // Remover o FII se já estiver nos favoritos
    setFavFiis(favFiis.filter((fii) => fii !== fiiToToggle));
    console.log(`${fiiToToggle} removido dos favoritos!`);
  } else {
    // Adicionar o FII se não estiver nos favoritos
    setFavFiis([...favFiis, fiiToToggle]);
    console.log(`${fiiToToggle} adicionado aos favoritos!`);
  }
}

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-600">
        <FaBuilding size={80} />
        <p className="!mt-10">Erro ao carregar os dados: {error.message}</p>
        <p>Tente mais tarde...</p>
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center !px-4">
          <section className="flex flex-col w-full md:w-6/10 gap-2 !mb-26">
            <h2 className="!mt-3 !m-0 !ml-1">Market</h2>
            {data?.map((item, index) => {
              const fiiSymbol = item?.results?.[0]?.symbol;
              const isFavorite = favFiis.includes(fiiSymbol);

              return (
                <div
                  style={{ animation: "changeColor .8s" }}
                  className="flex !p-1.5 items-center justify-between rounded-2xl bg-gray-900"
                  key={fiiSymbol || `index-${index}`}
                >
                  <span className="w-7">
                    <img
                      className="rounded-md !ml-2"
                      src={item?.results?.[0]?.logourl || fii11}
                      alt={item?.results?.[0]?.shortName || "Logo do FII"}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fii11;
                      }}
                    />
                  </span>

                  <span style={{ fontSize: ".8rem" }} className="flex flex-col">
                    {fiiSymbol}
                    <span>{item?.results?.[0]?.shortName}</span>
                  </span>

                  <span style={{ fontSize: ".9rem" }} className="flex flex-col">
                    R$ {item?.results?.[0]?.regularMarketPrice?.toFixed(2) ?? "N/A"}
                    <span
                      style={{
                        fontSize: ".8rem",
                        animation: "changeColor 3s",
                      }}
                      className={
                        item?.results?.[0]?.regularMarketChange < 0
                          ? "text-red-600"
                          : "text-green-600"
                      }
                    >
                      {item?.results?.[0]?.regularMarketChange?.toFixed(2) ?? "N/A"} %
                    </span>
                  </span>

                  <span
                    onClick={() => toggleFavFii(fiiSymbol)}
                    className="flex self-center cursor-pointer"
                    aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                  >
                    <button className="!mr-2 focus:outline-none">
                      <FaStar className={isFavorite ? "text-yellow-300" : "text-gray-700"} size={18} />
                    </button>
                  </span>
                </div>
              );
            })}
          </section>
      </main>
      <FloatingMenu />
    </>
  );
}