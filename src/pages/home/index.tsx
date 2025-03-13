import { useEffect, useState } from "react"
import fetchApi from '../../services/api/api';
import ApiProps from "../../types/ApiProps";


export function Home() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ApiProps[]>([]);
  const fiiCodes = ["HGLG11", "KNRI11", "MXRF11", "VISC11"];


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  return(
    <>
      <main>
        <section>
          <span>{}</span>
        </section>
      </main>
    </>
  )
}