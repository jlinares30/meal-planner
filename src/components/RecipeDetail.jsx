import style from '../styles/RecipeDetail.module.css';
import { useMeal } from '../context/MealContext';
import { useEffect, useState } from 'react';
import { use } from 'react';

function RecipeDetail({ recipe }) {
  const { selectedRecipe, ingredients, selectedIngredients } = useMeal();
  const [ingredientsTransform, setIngredientsTransform] = useState([]);
  const [percentage, setPercentage] = useState(0);

  console.log(selectedIngredients);
  console.log(ingredientsTransform);
  useEffect(() => {
    if (selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0) {
      const transformedIngredients = selectedRecipe.ingredients
        .map(recipeIngredientId => {
          const foundIngredient = ingredients.find(ing => ing.id === recipeIngredientId);
          return foundIngredient ? foundIngredient.name : null;
        })
        .filter(Boolean);
  
      setIngredientsTransform(transformedIngredients);
    }


  }, [selectedRecipe, ingredients]);

  function isSelected(ingredient) {
    if(ingredientsTransform.length > 0 && selectedIngredients.length > 0) {
      return selectedIngredients.includes(ingredient) ? true : false
    }
  }
  function recalculate() {
    // devuelve un array con los ingredientes seleccionados
    return ingredientsTransform.filter(ingredient => isSelected(ingredient.toLowerCase())).length;
  }

    useEffect(() => {
      if(ingredientsTransform.length > 0 && selectedIngredients.length > 0 && recalculate() > 0) {
        setPercentage((recalculate() * 100)/ingredientsTransform.length)
      } else {
        setPercentage(0);
      }
      console.log(percentage);
    }, [ingredientsTransform, selectedIngredients]);



  return (
    <section className={style.recipeDetail}>
      <img className={style.recipeImg} src={`src/assets/${selectedRecipe.name || 'ensalada de espinaca y queso'}.jpg`} alt="recipe image" />
        <h2 className={style.recipeTitle}>{selectedRecipe.name || ' '}</h2>
      <div className={style.recipeDetailContainer}>
        <h1 className={style.title}>Recipe Detail</h1>
        <ul className={style.ingredientList} >
          {
            selectedRecipe.ingredients ? (
              ingredientsTransform.map((ingredient, index) => (
                  <li key={index} style={{backgroundColor: isSelected(ingredient.toLowerCase()) ? 'green':'red'}} className={style.ingredientItem}>{ingredient}</li>  
                ))
              ):(
                <p className={style.noIngredients}>No Ingredients Selected </p>
              )
            }
            </ul>
              <div className={style.progressBarContainer} value="20" max="100">
                <div className={style.progressBar} style={{ width: `${percentage}%` }}></div>
              </div>
        
      </div>
    </section>
  );
}

export default RecipeDetail;