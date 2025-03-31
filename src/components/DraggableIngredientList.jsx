import { useMeal } from '../context/MealContext';
import style from '../styles/DraggableIngredientList.module.css';
import { useDrag, useDrop } from 'react-dnd';
function DraggableIngredientList({ ingredient, index, moveItem }) {
  const {shoppingList} = useMeal()

  const [{ isDragging }, drag] = useDrag({
    type: "INGREDIENT",
    item: {index} ,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "INGREDIENT",
    hover: (item) => {
      console.log(item.index, index)
      if (item.index !== index) {
        moveItem(item.index, index); // Llamamos a moveItem con los índices correctos
        item.index = index; // Actualizamos el índice del elemento arrastrado
      }
    },
  });

  return (
    <li ref={(node) => drag(drop(node))} className={style.itemList}>
      <div className={style.nameDotsContainer}>
        <img src="src/assets/grid-dots.svg" alt="grid-dots" />
        <div className={style.nameItem}>{ingredient.name}</div>
      </div>
      <div className={style.price}>2</div>
    </li>
  );
}

export default DraggableIngredientList;