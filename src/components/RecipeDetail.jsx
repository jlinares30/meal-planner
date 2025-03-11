import style from '../styles/RecipeDetail.module.css';
import { useMeal } from '../context/MealContext';

function RecipeDetail({ recipe }) {
  const { selectedRecipe } = useMeal();

  return (
    <section className={style.recipeDetail}>
      <img className={style.recipeImg} src={`src/assets/${selectedRecipe.name || 'ensalada de espinaca y queso'}.jpg`} alt="recipe image" />
      <h2 className={style.recipeTitle}>{selectedRecipe.name || ' '}</h2>
      <div className={style.recipeDetailContainer}>
        <h1 className={style.title}>Recipe Detail</h1>
          {
            selectedRecipe.ingredients ? (
              selectedRecipe.ingredients.map((ingredient, index) => (
                <ul className={style.ingredientList} key={index}>
                  <li className={style.ingredientItem}>{ingredient}</li>
                </ul>
              ))
            ):(
              <p>No Ingredients Selected </p>
            )
          }
        <div className={style.progressBarContainer} value="20" max="100">
          <div className={style.progressBar} style={{ width: "60%" }}></div>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetail;