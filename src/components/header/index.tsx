import LogoSoffis from '../../assets/logo-soffis.png'
import { Link } from 'react-router-dom'

export function Header() {
  return(
    <header className="flex justify-between w-full h-20">
      <span className={' flex self-center !m-4 w-30'}>
        <Link to={'/'}>
        <img src={LogoSoffis} alt="logo" />
        </Link>
      </span>
      <div className='flex self-center !m-6 text-amber-50 gap-3'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/news'}>News</Link>
      </div>
    </header>
  )
}