import style from '../styles/Card.module.css';
import { useMeal } from '../context/MealContext';

function Card({ product }) {
  const { showRecipeDetails, openRecipeModal } = useMeal();

  function handleOnClick(product) {
    return () => {
      showRecipeDetails(product);
    }
  }

  return (
    <div className={style.recipeCard} onClick={handleOnClick(product)}>
      <img src={`src/assets/${product.name}.jpg`} alt={product.name} />
      <div className={style.infoContainer}>
        <h2 className={style.title} onClick={openRecipeModal}>{product.name}</h2>
        <p className={style.description}>{product.category}</p>
      </div>
    </div>
  );
}

export default Card;