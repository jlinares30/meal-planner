import style from '../styles/Card.module.css';
import { useMeal } from '../context/MealContext';
import { useDrag } from 'react-dnd';

function Card({ product }) {
  const { showRecipeDetails, openRecipeModal, ingredients } = useMeal();

  function handleOnClick(product) {
    return () => {
      showRecipeDetails(product);
    }
  }

  function transform(){
        // Transformar los ingredientes de la receta a un array de objetos ingredient
        if (product.ingredients) {
          const transformedIngredients = product.ingredients
            .map(recipeIngredientId => {
              const foundIngredient = ingredients.find(ing => ing.id === recipeIngredientId);
              return foundIngredient ? foundIngredient : null;
            })
            .filter(Boolean);
      
          return transformedIngredients;
        }
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PRODUCT", // Identificador del tipo de elemento que se está arrastrando
    item: product.ingredients ? {product: transform()} : {product}, // Información que se arrastra
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div draggable ref={drag} className={style.recipeCard} onClick={handleOnClick(product)}>
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