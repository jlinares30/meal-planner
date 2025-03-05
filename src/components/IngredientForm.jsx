import { useState } from 'react';
import style from '../styles/IngredientForm.module.css';
function IngredientForm() {
  const [ingredients, setIngredients] = useState([]);

  return (
    <form className={style.ingredientForm}>
      <h1 className={style.title}>Available Ingredients</h1>
      <label htmlFor='inputIngredient' className={style.lbTitle}>List of Ingredients</label>
      <input id='inputIngredient' className={style.inputIngredient} placeholder='Example: tomato, avocado' type="text"/>
      <h2 className={style.selectedTitle}>Ingredients Selected</h2>
      <ul className={style.ingredientList}>
        {ingredients.length == 0 ? (
          <>  
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
          <li className={style.ingredientSelected}>
            <p>Ingredient 1</p>
            <img className={style.deleteBtn} src="src/assets/x.png" alt="delete button" />
        </li>
        </>
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