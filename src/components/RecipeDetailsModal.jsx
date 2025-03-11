import style from '../styles/RecipeDetailsModal.module.css';
import {useMeal } from '../context/MealContext';

function RecipeDetailsModal(){
    const {selectedRecipe, openRecipeModal} = useMeal();
    
    return(
        <div className={style.modalBG} onClick={openRecipeModal}>
        <div className={style.recipeDetail}>
          <div className={style.headerSection}>
            <h1 className={style.recipeTitle}>{selectedRecipe.name}</h1>
            <img className={style.imgCover} src={`src/assets/${selectedRecipe.name}.jpg`} alt="img" />
          </div>
          <div className={style.stepsSection}>
            <h1 className={style.title}>Steps</h1>
            <ol>
              <li>Preheat the oven to 350°F (175°C).</li>
              <li>Mix flour, sugar, and eggs in a bowl.</li>
              <li>Pour the mixture into a baking dish.</li>
              <li>Bake for 30 minutes or until golden brown.</li>
            </ol>
          </div>
          <div className={style.ingredientsSection}>
            <h1 className={style.title}>Ingredients</h1>
            <ul>
              <li>2 cups of flour</li>
              <li>1 cup of sugar</li>
              <li>3 eggs</li>
              <li>1/2 cup of milk</li>
            </ul>
          </div>
          <div className={style.nutritionalValueSection}>
            <h1 className={style.title}>Nutritional Value</h1>
            <table className={style.nutritionalValueTable}>
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>200 kcal</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>5 g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>10 g</td>
                </tr>
                <tr>
                  <td>Carbohydrates</td>
                  <td>30 g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default RecipeDetailsModal;