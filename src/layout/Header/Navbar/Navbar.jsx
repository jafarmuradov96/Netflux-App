import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleNavLinkClick = () => {
    scrollToTop(); // Scroll to the top when a NavLink is clicked
  };
  return (
    <nav className='navbar'>
        <ul>
            <li><NavLink to= '/' onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'activeBtn' : ''}>Home</NavLink> </li>
            <li><NavLink to= 'movies' onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'activeBtn' : ''}>Movies</NavLink> </li>
            <li><NavLink to= 'top-rated' onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'activeBtn' : ''}>Top Rated</NavLink> </li>
            <li><NavLink to= 'upcoming' onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'activeBtn' : ''}>Upcoming</NavLink> </li>
        </ul>
    </nav>
  )
}

export default Navbar