import { useEffect, useState } from "react"
import fetchApi from '../../services/api/api';
import ApiProps from "../../types/ApiProps";

  interface ResultItem {
    currency: string;
    marketCap: number | null;
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
    priceEarnings: number | null;
    earningsPerShare: number | null;
    logourl: string;
}

  interface ApiProps {
    results: ResultItem[];
    requestedAt: string;
    took: string;
}

export function Home() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ApiProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fiiCodes = [
    "KNCR11", "KNIP11", "XPML11", "HGLG11", "KNRI11", "BTLG11", "MXRF11", "VISC11", "HGRE11", "HGBS11",
    "HGFF11", "HGLG11", "HGRU11", "HGFF11", "HGRU11", "HGFF11", "HGLG11", "HGRU11", "HGFF11"
    ];


  useEffect(() => {
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
      } catch (err) {
        console.error(`Erro ao buscar dados: ${err}`);
        setError(`Erro ao buscar dados: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return(
    <>
      <main className='w-full flex justify-center'>
      {loading ? <span className="flex justify-center items-center text-2xl text-amber-50"> Loading...</span> : (

        <section className='flex !my-8 !mx-2 h-16 flex-col w-full md:w-5/10 gap-2'>
          {
            data.map((item, index) => (
              <div 
                className="flex !p-4 justify-between rounded-2xl text-cyan-50 bg-gray-950" 
                key={item.results[0]?.symbol || `index-${index}`}>
                <span className="w-6">
                  <img src={item.results[0]?.logourl} alt="" />
                </span>
                <span> {item.results[0]?.symbol}</span>
                <span>R$ {item.results[0]?.regularMarketPrice} </span>
               { <span className={item.results[0]?.regularMarketChangePercent < 0 ? 'text-red-600' : 'text-green-600'}> {item.results[0]?.regularMarketChangePercent.toFixed(2)}% </span>}
              </div>
            ))
          }
        </section>
        )
      }
      </main>
    </>
  )
}