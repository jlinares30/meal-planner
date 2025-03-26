import style from '../styles/SearchBar.module.css';
import {useMeal} from '../context/MealContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchBar({location}) {
    const {ingredients,recipes, productSearched, setProductSearched} = useMeal();
    const pathlocation = useLocation();
    const handleOnChange = (e) => {
        const products = location === 'recipe-page' ? recipes : ingredients;
        const productsToShow = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        console.log(productsToShow);
        setProductSearched(productsToShow);
    }
    useEffect(() => {
        setProductSearched([]);
    }
    , [pathlocation.pathname])

  return (
    <div className={style.searchContainer}>
        <input type="text" placeholder="Search" className={style.searchInput} onChange={handleOnChange}/>
        <img src="src/assets/search.svg" alt="search" className={style.searchIcon} />
    </div>
  );
}

export default SearchBar;