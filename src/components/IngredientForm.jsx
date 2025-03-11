import { useEffect, useState } from 'react';
import style from '../styles/IngredientForm.module.css';
import { useMeal } from '../context/MealContext';
function IngredientForm() {
  const { ingredients, addIngredient, removeIngredient,selectedIngredients } = useMeal();

  const handleOnChange = (e) => {
    console.log(e.target.value);
    let newIngredients = e.target.value.split(',')
      .map((item) => item.trim().toLowerCase()); // ['tomato', 'avocado']
    const removedIngredients = selectedIngredients.filter((item) => !newIngredients.includes(item));
    if(removedIngredients.length > 0) {
      removedIngredients.forEach((item) => removeIngredient(item));
    }
    
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

  return (
    <form className={style.ingredientForm}>
      <h1 className={style.title}>Available Ingredients</h1>
      <label htmlFor='inputIngredient' className={style.lbTitle}>List of Ingredients</label>
      <input id='inputIngredient' className={style.inputIngredient} placeholder='Example: tomato, avocado' type="text" onChange={handleOnChange}/>
      <h2 className={style.selectedTitle}>Ingredients Selected</h2>
      <ul className={style.ingredientList}>
        {selectedIngredients.length !== 0 ? (  
            selectedIngredients.map((ingredient, index) => (
              <li key={index} className={style.ingredientSelected}>
                <p>{ingredient}</p>
                <img className={style.deleteBtn} onClick={handleOnClick(ingredient)} src="src/assets/x.png" alt="delete button" />
              </li>
            ))          
        ):
      (<p>No Ingredients Selected </p>)}
      </ul>
      <button type="button" className={style.Btn} >Search</button>
      <button type="button" className={style.Btn} >Filter</button>
      <img className={style.mealImg} src="src/assets/profile.jpg" alt="meal image" />
    </form>
  );
}

export default IngredientForm;