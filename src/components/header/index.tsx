import LogoSoffis from '../../assets/logo-soffis.png';
import { Link } from 'react-router-dom';
import useIsMobile from '../../utils/isMobile/useIsMobile';

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex justify-between w-full h-20 !p-4">
      <span className="flex self-center w-32">
        <Link to={'/'}>
          <img src={LogoSoffis} alt="logo" />
        </Link>
      </span>

      {!isMobile && (
        <div className="flex self-center text-amber-50 gap-3 !mr-10">
          <Link to={'/'}>Home</Link>
          <Link to={'/news'}>News</Link>
          <Link to={'/about'}>About</Link>
        </div>
      )}
    </header>
  );
}
