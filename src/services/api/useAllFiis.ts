import { useEffect, useState } from "react";
import ApiProps from "../../types/api/ApiProps";
import fiiCodes from "../../data/fiiCodes";
import fetchApi from "./api";

export function useAllFiis() {
  const [data, setData] = useState<ApiProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  //fetch api
  useEffect(() => {
    const cachedFiis = localStorage.getItem("FiisCache");

    if (cachedFiis) {
      const parsedFiis: ApiProps[] = JSON.parse(cachedFiis);
      setData(parsedFiis);
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const results = await Promise.all(
            fiiCodes.map(async (code) => await fetchApi(code)),
          );
          setData(results);

          localStorage.setItem("FiisCache", JSON.stringify(results));
        } catch (err) {
          console.error(err);
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }

    const timeoutID = setTimeout(() => {
      localStorage.removeItem("FiisCache");
    }, 10800000);

    return () => clearTimeout(timeoutID);
  }, []);

  return { data, error, loading };
}
