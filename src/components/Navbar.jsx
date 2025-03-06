import { Link } from "react-router-dom";
import style from '../styles/Navbar.module.css';
function Navbar({ location }) {
  return (
    <nav className={style.navbarContainer}>
      <div className={style.navbar}>
        {location == 'home' ? (
          <ul className={style.navbarList}>
            <li className={style.navbarListItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.navbarListItem}>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className={style.navbarListItem}>
              <Link to="/ingredients">Ingredients</Link>
            </li>
            <li style={{pointerEvents: 'none'}} className={style.navbarListItem}>
              <Link to="/planner">Planner</Link>
            </li>
          </ul>
        ):(
          <div className={style.searchContainer}>
            <input type="text" placeholder="Search" className={style.searchInput} />
            <img src="src/assets/search.svg" alt="search" className={style.searchIcon} />
          </div>
        ) }
         <div >
            <img className={style.avatar} src="src/assets/profile.jpg" alt="avatar" />
          </div>
      </div>
    </nav>
  );
}

export default Navbar;