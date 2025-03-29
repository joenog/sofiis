import { FaBuilding } from "react-icons/fa";


export function NotFound() {
  return(
    <>
      <main className="flex flex-col h-96 items-center justify-center">
        <span className="!my-8"><FaBuilding size={80} /> </span>
        <h1>Galpão vazio,</h1>
        <h2>tente outros.</h2>
      </main>
    </>
  )
}