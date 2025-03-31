import { useEffect, useState } from 'react';
import style from '../styles/IngredientForm.module.css';
import { useMeal } from '../context/MealContext';
import FilterBar from './FilterBar';
function IngredientForm() {
  const {addIngredient, removeIngredient,selectedIngredients } = useMeal();
  const [openFilter, setOpenFilter] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
    let newIngredients = e.target.value.split(',')
      .map((item) => item.trim().toLowerCase()); // ['tomato', 'avocado']
    
      // filtra los ingredientes seleccionados que han sido borrados del input y los elimina
    const removedIngredients = selectedIngredients.filter((item) => !newIngredients.includes(item));
    if(removedIngredients.length > 0) {
      removedIngredients.forEach((item) => removeIngredient(item));
    }
    // filtra los nuevos ingredientes agregados al input que no han sido seleccionados y los agrega
    const addedIngredients = newIngredients.filter((item) => !selectedIngredients.includes(item));
    if(addedIngredients.length > 0) {
      addIngredient(addedIngredients);
    }
  }
  function handleOnClick(ingredient) {
    return () => {
      removeIngredient(ingredient);
    }
  }

  function handleFilter() {
    setOpenFilter(!openFilter);
  }

  return (
    <>
    <form className={style.ingredientForm}>
      <h1 className={style.title}>Available Ingredients</h1>
      <label htmlFor='inputIngredient' className={style.lbTitle}>List of Ingredients</label>
      <input id='inputIngredient' 
            className={style.inputIngredient} 
            placeholder='Example: tomato, avocado' 
            type="text" 
            onChange={handleOnChange}
            value={inputValue}
            />
      <h2 className={style.selectedTitle}>Ingredients Selected</h2>
      <ul className={style.ingredientList}>
        {selectedIngredients.length !== 0 ? (  
            selectedIngredients.map((ingredient) => (
              <li key={ingredient.id} className={style.ingredientSelected}>
                <p>{ingredient}</p>
                <img className={style.deleteBtn} onClick={handleOnClick(ingredient)} src="src/assets/x.png" alt="delete button" />
              </li>
            ))          
        ):
      (<p>No Ingredients Selected </p>)}
      </ul>
      {/* <button type="button" className={style.Btn} >Search</button> */}
      <div className={style.filterBar}>
        <button type="button" className={style.Btn} onClick={handleFilter} >Filter</button>
      {openFilter && <FilterBar/>}
      </div>
      <img className={style.mealImg} src='src/assets/pollo a la plancha con ensalada.jpg' alt="meal image" />    
      </form>
      </>
  );
}

export default IngredientForm;