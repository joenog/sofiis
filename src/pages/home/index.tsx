import { useState } from "react"
import {FloatingMenu} from "../../components/floatingMenu/index.tsx";
import { useAllFiis } from "../../services/api/useAllFiis.ts";
import Loading from "../../components/loading/index.tsx";
import { FaBuilding } from "react-icons/fa";

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
          <section className="md:w-6/10">
            <h2>Wallet</h2>
            <div className="!p-4 bg-gray-800 rounded-xl">
              { <p className="text-transparent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nihil corporis .</p> }
            </div>
          </section>
          <section className="md:w-6/10">
            <h2>Favorites</h2>
            <div className="!p-4 bg-gray-800 rounded-xl">
              { <p className="text-transparent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nihil corporis iste eos nobis harum tempore quo, quae animi minima, voluptas et iusto suscipit nulla esse maiores odit. Mollitia, temporibus.</p> }
            </div>
          </section>

          <section className='flex !my-8 flex-col w-full md:w-6/10 gap-2'>
            <h2>All</h2>
            {
              data.slice(0, visibleCont).map((item, index) => (
                <div 
                className="flex !p-4 justify-between rounded-2xl bg-gray-900" 
                key={item.results[0]?.symbol || `index-${index}`}>
                  <span className="w-6">
                    <img src={item.results[0]?.logourl} alt="" />
                  </span>
                  <span> {item.results[0]?.symbol}</span>
                  <span>R$ {item.results[0]?.regularMarketPrice} </span>
                { <span 
                    className={item.results[0]?.regularMarketChangePercent < 0 ? 'text-red-600' : 'text-green-600'}> {item.results[0]?.regularMarketChangePercent.toFixed(2)}% 
                  </span>}
                </div>
              ))
            }
            <span className="flex justify-end">
              <button 
                onClick={loadMore}
                className="!px-4 !py-1 !mb-10 transition bg-gray-800 rounded-xl hover:bg-slate-600" type="button">
                  More
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