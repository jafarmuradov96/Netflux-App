import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><NavLink to= '/' className={({ isActive }) => isActive ? 'activeBtn' : ''}>Home</NavLink> </li>
            <li><NavLink to= 'movies' className={({ isActive }) => isActive ? 'activeBtn' : ''}>Movies</NavLink> </li>
            <li><NavLink to= 'top-rated' className={({ isActive }) => isActive ? 'activeBtn' : ''}>Top Rated</NavLink> </li>
            <li><NavLink to= 'upcoming' className={({ isActive }) => isActive ? 'activeBtn' : ''}>Upcoming</NavLink> </li>
            <li><NavLink to= 'your-ratings' className={({ isActive }) => isActive ? 'activeBtn' : ''}>Your Ratings</NavLink> </li>
        </ul>
    </nav>
  )
}

export default Navbar