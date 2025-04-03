import { FloatingMenu } from "../../components/floatingMenu";
import { FaBuilding, FaStar } from "react-icons/fa";
import Loading from "../../components/loading";
import { useAllFiis } from "../../services/api/useAllFiis";
import { useState } from "react";

export function Market() {
  
  const { data, error, loading } = useAllFiis();
  const [favFiis, setFavFiis] = useState<string[]>([])

  function toggleFavFiis(id: string, ) {
    setFavFiis((prev) => 
      prev.includes(id) ? prev.filter((fii) => fii != id) : [...prev, id]
    )
    console.log(favFiis)
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

  return(
    <>
      <main className='flex flex-col items-center !px-4'>
        {loading ? <Loading /> : (<section className='flex flex-col w-full md:w-6/10 gap-2 !mb-26'>
          <h2 className="!mt-3 !m-0 !ml-1">Market</h2>
          {data.map((item, index)=> (
            <div className="flex !p-4 justify-between rounded-2xl bg-gray-900" 
            key={item.results[0]?.symbol || `index-${index}`}>
            <span className="w-6"> 
              <img 
                className="rounded-md" 
                src={item.results[0]?.logourl !== null ? item.results[0]?.logourl : 'https://assets.hgbrasil.com/finance/icons/real-estate.png'}  
                alt="" 
              />
            </span>
              <span> {item.results[0]?.symbol} </span>
              <span> {item.results[0]?.regularMarketPrice} </span>
              <span className={item?.results?.[0]?.regularMarketChange < 0 ? 'text-red-600' : 'text-green-600'}>
                {item?.results?.[0]?.regularMarketChange?.toFixed(2) ?? 'N/A'}
              </span>
                <span className='flex self-center'>
                  <button onClick={ ()=> toggleFavFiis(item.results[0].symbol) }> 
                    <FaStar className={'text-gray-700'} size={18}/>
                  </button>
              </span>
            </div>
          ))}
        </section>)}
      </main>
      
      <FloatingMenu />
    </>
    
  )
}