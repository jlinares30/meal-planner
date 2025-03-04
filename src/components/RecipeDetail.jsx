import style from '../styles/RecipeDetail.module.css';

function RecipeDetail() {
  return (
    <section className={style.recipeDetail}>
      <img className={style.recipeImg} src="src/assets/profile.jpg" alt="recipe image" />
      <div className={style.recipeDetailContainer}>
        <h1 className={style.title}>Recipe Detail</h1>
          <ul className={style.ingredientList}>
            <li className={style.ingredientItem}>Ingredient 1</li>
            <li className={style.ingredientItem}>Ingredient 1</li>
            <li className={style.ingredientItem}>Ingredient 1</li>
            <li className={style.ingredientItem}>Ingredient 1</li>
            <li className={style.ingredientItem}>Ingredient 1</li>
          </ul>
        <div className={style.progressBarContainer} value="20" max="100">
          <div className={style.progressBar} style={{ width: "60%" }}></div>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetail;