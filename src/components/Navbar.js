import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">
      <h2>Bookstore CMS</h2>
    </div>
    <ul>
      <li><NavLink className="nav-link" to="/">Books</NavLink></li>
      <li><NavLink className="nav-link" to="categories">Categories</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
