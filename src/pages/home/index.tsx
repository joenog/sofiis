import { useEffect, useState } from 'react'
import fetchApi from '../../services/api/api'
import { FaPlus } from 'react-icons/fa';

interface ApiProps {
  results: {
    currency: string;
    marketCap: number;
    shortName: string;
    longName: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    symbol: string;
    priceEarnings: number;
    earningsPerShare: number;
    logourl: string;
  };
  requestedAt: string;
  took: string;
}

export function Home() {

  const [data, setData] = useState<ApiProps | null>(null);
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  }

  useEffect(() => {
    const fetchData = async (codeFi: string) => {
      try {
        const result = await fetchApi(codeFi);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData('HGLG11')
  },[])

  return(
    <>
      <main className='w-full flex justify-center'>
        <section className='flex flex-col w-full md:w-5/10 !m-2 h-16'>
            <div className='flex justify-between  !p-2 rounded-2xl text-cyan-50 bg-gray-950'>
              <span className=' w-6 !m-3'><img src={data?.results[0].logourl} alt=""></img></span>
              <span className=' !m-3'>{data?.results[0].symbol}</span>
              <span className=' !m-3'>R$ {data?.results[0].regularMarketPrice} </span>
              <span className=' !m-3'>R$ {data?.results[0].regularMarketChangePercent} </span>

              {/*popUp*/}
              <button 
                type='button' 
                onClick={toggleDiv} 
                className='flex !mr-2 bg-gray-700 w-8 h-8 rounded-xl justify-center self-center'>
                <FaPlus size={10} className='self-center'/>
              </button>
              
            </div>
            { showDiv && 
                (<span className='flex w-auto rounded-2xl bg-gray-950 text-amber-50 flex-col'>
                  <span className='!m-2 !p-2 rounded-xl  bg-gray-900'> {data?.results[0].shortName} </span>
                  <span className='!m-2 !pl-2'>Max: R$ {data?.results[0].regularMarketDayHigh} </span>
                  <span className='!m-2 !pl-2'>Min: R$ {data?.results[0].regularMarketDayLow} </span>
                  <span className='!m-2 !pl-2'>R$ {data?.results[0].regularMarketVolume} </span>
                </span>
                )}
          </section>
  
      </main>
    </>
  )
}