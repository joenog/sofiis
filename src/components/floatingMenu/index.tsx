import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaUser } from "react-icons/fa";
import useIsMobile from "../../utils/isMobile/useIsMobile";

export function FloatingMenu() {

  if(window.innerWidth > 700) return useIsMobile;

  return (

    <div className="w-full fixed bottom-4 flex justify-center">
      <div
        className="flex justify-center rounded-4xl gap-6 !py-2 !px-5"
        style={{ backgroundColor: "rgba(42, 122, 162, 0.6)" }} // Valores corrigidos
      >
        <Link to={"/"}>
          <FaHome size={38} color="#030712" />
        </Link>
        <Link to={"/news"}>
          <FaNewspaper size={38} color="#030712" />
        </Link>
        <Link to={"/profile"}>
          <FaUser size={34} color="#030712" />
        </Link>
      </div>
    </div> 
  );
}
