import { FaAd } from "react-icons/fa";
import { Link } from "react-router-dom";

export function FloatingMenu() {
  return(
    <span className="w-full fixed top-11/12">
      <span className="w-full flex justify-center rounded-2xl !p-4 bg-amber-950">
        <div className="flex self-center !p-24 bg-amber-100">
          <Link> <FaAd color="black"/> </Link>
        </div>
      </span>
    </span>
  )
}