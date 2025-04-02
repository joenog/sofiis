import { useState } from "react"
import {FloatingMenu} from "../../components/floatingMenu/index.tsx";
import { useAllFiis } from "../../services/api/useAllFiis.ts";
import Loading from "../../components/loading/index.tsx";
import { FaBuilding, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home() {
  const { data, error, loading } = useAllFiis();
  const [visibleCont, setVisibleFiis] = useState(5);

  //BUTTOM SHOW MORE
  const loadMore = ()=> {
    setVisibleFiis(prev => prev + 5)
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
      {loading ? <Loading /> : ( 
        <main className='flex flex-col items-center !px-4'>
          <section>
            <div>
              
            </div>
          </section>
          <section className="md:w-6/10">
            <h2>Wallet</h2>
            <div className="!p-4 bg-gray-800 rounded-xl">
              <Link to={'/profile'}>
              { <p className="text-transparent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nihil corporis , Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nihil corporis .</p> 
              }
              </Link>
            </div>
          </section>

          <section className='flex !my-2 flex-col w-full md:w-6/10 gap-2'>
            <h2>Favorites</h2>
              {
                data.slice(0, visibleCont).map((item, index) => (
                  <div
                  className="flex !p-4 justify-between rounded-2xl bg-gray-900"
                  key={item.results[0]?.symbol || `index-${index}`}>
                    <span className="w-6">
                      <img className="rounded-md" src={item.results[0]?.logourl} alt="" />
                    </span>
                    <span> {item.results[0]?.symbol}</span>
                    <span>R$ {item.results[0]?.regularMarketPrice} </span>
                  { <span
                      className={item.results[0]?.regularMarketChangePercent < 0 ? 'text-red-600' : 'text-green-600'}> {item.results[0]?.regularMarketChangePercent.toFixed(2)}%
                    </span>}
                  </div>
                ))
              }
            <span className="flex justify-end !mb-18">
              <button 
                onClick={loadMore}
                className="!px-4 !py-2 transition bg-gray-800 rounded-xl hover:bg-slate-700" type="button">
                  <FaPlus className="text-gray-500" size={13} />
                </button>
            </span>
          </section>
        </main>
      ) 
      }
      <FloatingMenu />
    </>
  )
}