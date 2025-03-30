import { useEffect, useState } from "react"
import fetchApi from '../../services/api/api.ts';
import ApiProps from "../../types/api/ApiProps.ts";
import fiiCodes from "../../data/fiiCodes.ts";
import Loading from "../../components/loading/index.tsx";
import {FloatingMenu} from "../../components/floatingMenu/index.tsx";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiProps[]>([]);
  const [visibleCont, setVisibleFiis] = useState(5);
  const [error, setError] = useState<string | null>(null);

  //BUTTOM SHOW MORE
  const loadMore = ()=> {
    setVisibleFiis(prev => prev + 5)
  }

  //FETCH API
  useEffect(() => {
    const cachedFiis = localStorage.getItem('fiisCache');

    if (cachedFiis) {
      setData(JSON.parse(cachedFiis));
    } else {
      const fetchData = async () => {
        setLoading(true);
        setError(null)
        try {
          const results = await Promise.all(
            fiiCodes.map(async (code)=> {
              const result = await fetchApi(code);
              return result;
            })
          );
          setData(results);
          localStorage.setItem('fiisCache', JSON.stringify(results));
        } catch (err) {
          console.error(`Erro ao buscar dados: ${err}`);
          setError(`Erro ao buscar dados: ${error}`);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }
  }, [])

  return(
    <>
      {loading ? <Loading /> : ( 
      <>
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
                Mais
              </button>
          </span>
        </section>
      </main>
      </>
        ) 
      }
      <FloatingMenu />
    </>
  )
}