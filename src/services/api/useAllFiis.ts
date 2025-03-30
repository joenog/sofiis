import { useEffect, useState } from "react";
import ApiProps from "../../types/api/ApiProps";
import fiiCodes from "../../data/fiiCodes";
import fetchApi from "./api";

export function useAllFiis() {

  const [data, setData] = useState<ApiProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setErros] = useState<Error | null>(null);

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
      } catch (err) {
        console.error(err as Error)
      }
    }

    fetchData();
  }, [])

  return {data, error};
}