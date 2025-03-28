import LogoSoffis from '../../assets/logo-soffis.png';
import { Link } from 'react-router-dom';
import useIsMobile from '../../utils/isMobile/useIsMobile';
import { FaUser } from 'react-icons/fa';

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="w-full fixed !p-2 top-0 flex justify-between items-center z-10 bg-gray-950">
      {/* Logo */}
      <span className="flex self-center w-32">
        <Link to={'/'}>
          <img src={LogoSoffis} alt="logo" />
        </Link>
      </span>

      <div className="flex items-center gap-6 !mr-4">
        {!isMobile && (
          <div className="flex items-center gap-4 text-amber-50">
            <Link to={'/market'}>Mercado</Link>
            <Link to={'/news'}>News</Link>
          </div>
        )}
        <Link className="border-1 p-2 rounded-xl bg-gray-700 flex items-center justify-center w-8 h-8" to={'/profile'}>
          <FaUser size={17} />
        </Link>
      </div>
    </header>
  );
}
