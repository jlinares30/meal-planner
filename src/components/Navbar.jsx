import { Link } from "react-router-dom";
import style from '../styles/Navbar.module.css';
function Navbar() {
  return (
    <nav className={style.navbarContainer}>
      <div className={style.navbar}>
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
        <li className={style.navbarListItem}>
            <Link to="/planner">Planner</Link>
        </li>
        <li className={style.navbarListItem}>
            <div >
                <img className={style.avatar} src="src/assets/profile.jpg" alt="avatar" />
            </div>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;