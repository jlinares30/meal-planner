import { Link } from "react-router-dom";
import style from '../styles/Navbar.module.css';
import SearchBar from "./SearchBar";
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
          <SearchBar location={location}/>
        ) }
         <div >
            <img className={style.avatar} src="src/assets/profile.jpg" alt="avatar" />
          </div>
      </div>
    </nav>
  );
}

export default Navbar;