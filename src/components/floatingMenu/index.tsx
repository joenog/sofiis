import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaUser } from "react-icons/fa";
import useIsMobile from "../../utils/isMobile/useIsMobile";

export function FloatingMenu() {

  const isMobile = useIsMobile();
  if(!isMobile) return null;

  return (

    <div className="w-full fixed bottom-4 flex justify-center">
      <div
        className="flex justify-center bg-[rgba(31,41,55,0.8)] rounded-4xl gap-6 !py-3 !px-5">
        <Link to={"/"}>
          <FaHome size={38} color="#030712" />
        </Link>
        <Link to={"/news"}>
          <FaNewspaper size={38} color="#030712" />
        </Link>
        <Link to={"/profile"}>
          <FaUser size={33} color="#030712" />
        </Link>
      </div>
    </div> 
  );
}
