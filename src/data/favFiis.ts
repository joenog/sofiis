import { useState, useEffect } from "react";

const useFavFiis = () => {
  const storedFavFiis = localStorage.getItem("favFiis");
  const initialFavFiis = storedFavFiis ? JSON.parse(storedFavFiis) : [];

  const [favFiis, setFavFiis] = useState<string[]>(initialFavFiis);

  // Use useEffect para atualizar o localStorage sempre que favFiis mudar
  useEffect(() => {
    localStorage.setItem("favFiis", JSON.stringify(favFiis));
  }, [favFiis]); // A dependência [favFiis] garante que o efeito rode apenas quando favFiis mudar

  return { favFiis, setFavFiis };
};

export default useFavFiis;
