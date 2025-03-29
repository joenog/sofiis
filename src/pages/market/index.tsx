import { useEffect, useState } from "react";
import { FloatingMenu } from "../../components/floatingMenu";
import ApiProps from "../../types/api/ApiProps";
import fiiCodes from "../../data/fiiCodes";
import fetchApi from "../../services/api/api";
import { FaStar } from "react-icons/fa";

export function Market() {

  const [data, setData] = useState<ApiProps[]>([]);

  //fetch api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          fiiCodes.map( async (code) => {
            const result = await fetchApi(code);
            return result;
          })
        );
        setData(results)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])


  return(
    <>
        <main className='flex flex-col items-center !px-4'>
          <section className='flex flex-col w-full md:w-6/10 gap-2 !mb-26'>
            <h2>Market</h2>
            {data.map((item, index)=> (
              <div className="flex !p-4 justify-between rounded-2xl bg-gray-900" 
              key={item.results[0]?.symbol || `index-${index}`}>
                <span className="w-6"> 
                  <img src={item.results[0]?.logourl} alt="" />
                </span>
                <span> {item.results[0]?.symbol} </span>
                <span> {item.results[0]?.regularMarketPrice} </span>
                <span className={item?.results?.[0]?.regularMarketChange < 0 ? 'text-red-600' : 'text-green-600'}>
                  {item?.results?.[0]?.regularMarketChange?.toFixed(2) ?? 'N/A'}
                </span>
                 <span className="flex self-center">
                  <button className={''}> <FaStar className="text-gray-700" size={17}/> </button>
                </span>
              </div>
            ))
          
            }
          </section>
        </main>
        
      <FloatingMenu />
    </>
    
  )
}