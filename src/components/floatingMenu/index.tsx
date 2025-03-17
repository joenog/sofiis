import { FaHome, FaNewspaper, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export function FloatingMenu() {
  return(
    <span className="w-full fixed top-11/12">
      <span className="flex justify-center">
          <div
            className="flex justify-center rounded-4xl gap-6 !py-2 !px-5"
            style={{ backgroundColor: 'rgba(442, 222, 662, .6)' }}
          >
            <Link to={'/'}> <FaHome size={38} color="#030712"/> </Link>
            <Link to={'/news'}> <FaNewspaper size={38} color="#030712"/> </Link>
            <Link to={'/profile'}> <FaUser size={34} color="#030712"/> </Link>
          </div>
      </span>
    </span>
  )
}