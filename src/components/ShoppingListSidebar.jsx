import style from '../styles/ShoppingListSidebar.module.css';
import { useDrop } from 'react-dnd';
import { useMeal } from '../context/MealContext';

function ShoppingListSidebar({location}) {

  const { shoppingList, setShoppingList } = useMeal();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    // tipo de item que acepta (personalizable)
    accept: "PRODUCT", 
    drop: (item, monitor) => {
      // si lo que se arrastra es un array de objetos ingredientes
      // se recorre el array y se añade cada objeto a la lista de la compra
      if(Array.isArray(item.product)){
        item.product.forEach((ingredient) => {
          setShoppingList(ingredient);
        })
      }
      // si no, se añade el objeto a la lista de la compra (seria simplemente un solo objeto) 
      else{
        setShoppingList(item.product);
      }
      console.log('Dropped item:', item.product);
      console.log(shoppingList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  
  const handleClearList = () => {
    setShoppingList([]);
  }

  return (
    <div className={style.shoppingListSidebar}>
      <h2 className={style.title}>Shopping List</h2>
      <ul ref={drop} className={style.shoppingList}>
        {shoppingList.length > 0 ? (shoppingList.map((ingredient)=> (
          <li key={ingredient.id} className={style.itemList}>
            <div className={style.nameDotsContainer}>
              <img src="src/assets/grid-dots.svg" alt="grid-dots" />
              <div className={style.nameItem}>{ingredient.name}</div>
            </div>
            <div className={style.price}>2</div>
          </li>
        ))): (<div>Add Some Ingredient</div>)}
      </ul>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleClearList} >Clear List</button>
      </div>
      <div className={style.budget}>
        Estimated Budget: $50
      </div>
    </div>
  );
}

export default ShoppingListSidebar;