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
      <img className={style.imgCard} src={`src/assets/${product.name}.jpg`} alt={product.name} />
      <img className={style.svgEye} onClick={openRecipeModal} src="src/assets/eye.svg" alt="eye svg" />
      <div className={style.infoContainer}>
        <h2 className={style.title}>{product.name}</h2>
        <p className={style.description}>{product.category}</p>
      </div>
    </div>
  );
}

export default Card;