import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <div className="nav-center">
      <NavLink to="/" className="logo">
        Bookstore CMS
      </NavLink>
      <ul className="menu">
        <li><NavLink className="nav-link active" to="/">Books</NavLink></li>
        <li><NavLink className="nav-link" to="categories">Categories</NavLink></li>
      </ul>
    </div>
    <div className="oval">
      <FaRegUser style={{ color: '#0290ff' }} />
    </div>
  </nav>
);
export default Navbar;
