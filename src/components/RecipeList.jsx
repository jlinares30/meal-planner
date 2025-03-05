import style from '../styles/RecipeList.module.css';
import RecipeCard from './RecipeCard';

function RecipeList() {
  return (
    <>
      <div className={style.recipeList}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
}

export default RecipeList;