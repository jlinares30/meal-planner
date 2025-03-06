import style from '../styles/Sidebar.module.css';
import classNames from 'classnames';

function Sidebar({ location }) {
  const sidebarClasses = classNames(
    style.sidebarHomePage,
    {
      [style.sidebar]: location !== "home",
    }
  );
  return (
    <aside className={sidebarClasses}>
      <h2 className={style.title} >Home</h2>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <img src="src/assets/receipt.svg" alt="recipe icon" />
            <p>Recipes</p>
          </li>
          <li className={style.navItem}>
            <img src="src/assets/avocado.svg" alt="ingredient icon" />
            <p>Ingredients</p>
          </li>
          <li className={style.navItem}>
            <img src="src/assets/list-check.svg" alt="list check icon" />
            <p>Shopping List</p>
          </li>
          <li className={style.navItem}>
            <img src="src/assets/calendar-week.svg" alt="calendar week icon" />
            <p>Planner</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;