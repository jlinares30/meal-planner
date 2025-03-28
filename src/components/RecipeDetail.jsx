import style from '../styles/RecipeDetail.module.css';
import { useMeal } from '../context/MealContext';
import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { useLocation } from 'react-router-dom';

function RecipeDetail() {
  const { selectedRecipe,
          showRecipeDetails, 
          ingredients, 
          selectedIngredients, 
          percentage, 
          setPercentage, 
          setAllPercentage, 
          setShoppingList, 
          removeShoppingList } = useMeal();
  const [ingredientsTransform, setIngredientsTransform] = useState([]);
  const [openIngredient, setOpenIngredient] = useState(null);
  const pathlocation = useLocation();

  useEffect(() => {
    // restablecer el ingrediente seleccionado al cambiar de pagina
    showRecipeDetails({});
  }, [pathlocation.pathname]);

  useEffect(() => {
    setOpenIngredient(null); // Cerrar la ventana de opciones al cambiar de receta

    // Transformar los ingredientes de la receta a un array de strings
    if (selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0) {
      const transformedIngredients = selectedRecipe.ingredients
        .map(recipeIngredientId => {
          const foundIngredient = ingredients.find(ing => ing.id === recipeIngredientId);
          return foundIngredient ? foundIngredient.name : null;
        })
        .filter(Boolean);
  
      setIngredientsTransform(transformedIngredients);
    }

    console.log(selectedRecipe)
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
      setAllPercentage();
      if(ingredientsTransform.length > 0 && selectedIngredients.length > 0 && recalculate() > 0) {
        setPercentage((recalculate() * 100)/ingredientsTransform.length)
      } else {
        setPercentage(0);
      }
      // console.log(percentage);
    }, [ingredientsTransform, selectedIngredients]);

  function setOption (ingredient) {
    setOpenIngredient(openIngredient === ingredient ? null : ingredient);
  }

  const handleIngredientClick = (ingredient) => {
    setOption(ingredient);
    console.log('click');
  }
  const handleClickAddShopping = (ingredient) => {
    setOption(ingredient);
    setShoppingList(ingredient);
  }
  const handleClickRemoveShopping = (ingredient) => {
    setOption(ingredient);
    removeShoppingList(ingredient);
  }

  //Drag and Drop

  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "ITEM",
  //   item,
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  // const handleDragStart = (e, item) => {
  //   e.dataTransfer.setData('text/plain', item);
  // }
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // }

  return (
    <section className={style.recipeDetail}>
      <img className={style.recipeImg} src={`src/assets/${selectedRecipe.name || 'ensalada de espinaca y queso'}.jpg`} alt="recipe image" />
        <h2 className={style.recipeTitle}>{selectedRecipe.name || ' '}</h2>
      <div className={style.recipeDetailContainer}>
        <h1 className={style.title}>Recipe Detail</h1>
        <ul className={style.ingredientList} >
          {
            selectedRecipe.ingredients ? (
              ingredientsTransform.map((ingredient) => (
                  <div className={style.ingredientItemContainer}  style={{justifySelf: ingredient === openIngredient ? 'start':'center'}}>
                    <li 
                    key={ingredient.id} 
                    onClick={() => handleIngredientClick(ingredient)} 
                    style={{backgroundColor: isSelected(ingredient.toLowerCase()) ? 'green':'red'}} 
                    className={style.ingredientItem} 
                    draggable
                    // ref={drag}
                    >{ingredient}</li>
                    {openIngredient === ingredient && <ul className={style.optionsWindow}>
                      <li 
                      className={style.optionItem} 
                      onClick={() => handleClickAddShopping(ingredient)}>Add Shopping List</li>
                      <li 
                      className={style.optionItem} 
                      onClick={() => handleClickRemoveShopping(ingredient)}>Remove Shopping List</li>
                      </ul>}
                  </div>  
                ))
              ):(
                <p className={style.noIngredients}>Select a Recipe</p>
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