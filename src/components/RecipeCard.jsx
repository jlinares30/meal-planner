import style from '../styles/RecipeCard.module.css';

function RecipeCard({ recipe }) {
  return (
    <div className={style.recipeCard}>
      <img src='src/assets/profile.jpg' alt='img' />
      <div className={style.infoContainer}>
        <h2 className={style.title}>Veg Mixer</h2>
        <p className={style.description}>Tomato salad and carrot</p>
      </div>
    </div>
  );
}

export default RecipeCard;