import style from '../styles/Sidebar.module.css';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { useMeal } from '../context/MealContext';
import { useEffect } from 'react';

function Sidebar({ location }) {
  const { shoppingList, setShoppingList } = useMeal();
  const sidebarClasses = classNames(
    style.sidebarHomePage,
    {
      [style.sidebar]: location !== "home",
    }
  );
  const navItemClasses = classNames(
    style.navItemHome,
    {
      [style.navItem]: location !== "home",
    }
  );

  //drag and drop
  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const data = e.dataTransfer.getData("text");
  //   setShoppingList((prev) => [...prev, data]);
  // }



  return (
    <aside className={sidebarClasses}>
      <Link to={"/"}>
      <h2 className={style.title}> Home</h2>
      </Link>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <Link to={"/recipes"}>
            <li className={navItemClasses}>
              <img src="src/assets/receipt.svg" alt="recipe icon" />
              <p>Recipes</p>
            </li>
          </Link>
          <Link to={"/ingredients"}>
          <li className={navItemClasses}>
            <img src="src/assets/avocado.svg" alt="ingredient icon" />
            <p>Ingredients</p>
          </li>
          </Link>
          <Link>
          <li className={navItemClasses} 
          // onDrop={handleDrop} 
          >
            <img src="src/assets/list-check.svg" alt="list check icon" />
            <p>Shopping List</p>
          </li>
          </Link>
          <Link >
          <li disabled className={navItemClasses}>
            <img src="src/assets/calendar-week.svg" alt="calendar week icon" />
            <p>Planner</p>
          </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;