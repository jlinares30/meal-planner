import style from '../styles/ShoppingListSidebar.module.css';
import { useDrop } from 'react-dnd';
import { useMeal } from '../context/MealContext';
import DraggableIngredientList from './DraggableIngredientList';
import { useEffect } from 'react';

function ShoppingListSidebar({location}) {

  const { shoppingList, setShoppingList } = useMeal();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    // isOver: si el item esta encima del dropzone
    // canDrop: si el item que se arrastra es del tipo correcto que acepta el dropzone
    // tipo de item que acepta (personalizable), en este caso es un "product"
    accept: "PRODUCT", 
    drop: (item, monitor) => {
      // si lo que se arrastra es un array de objetos ingredientes
      // se recorre el array y se añade cada objeto a la lista de la compra
      // const newArray = []
      // if(Array.isArray(item.product)){
      //   item.product.forEach((ingredient) => {
      //     newArray.push(ingredient);
      //   })
      //   setShoppingList(newArray);
      // }
      // // si no, se añade el objeto a la lista de la compra (seria simplemente un solo objeto) 
      // else{
      //   setShoppingList(item.product);
      // }
      const newItems = Array.isArray(item.product) ? item.product : [item.product];
      const filteredItems = newItems.filter(
        (newItem) => !shoppingList.some((existingItem) => existingItem.id === newItem.id)
      );

      // Actualizar el estado con los nuevos elementos no duplicados
      setShoppingList(filteredItems);
      console.log(item.product);

      console.log('Dropped item:', item.product);
      console.log(shoppingList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const moveItem = (dragIndex, hoverIndex) => {
    const updatedList = [...shoppingList];
    //guarda el item que se arrastra y lo elimina de la lista
    // y lo añade en la posicion del item que se suelta
    const [draggedItem] = updatedList.splice(dragIndex, 1);
    console.log(draggedItem);
    console.log(updatedList);
    updatedList.splice(hoverIndex, 0, draggedItem);
    console.log(updatedList);
    
    //actualiza la lista de la compra con el nuevo orden
    // setShoppingList recibe un solo objeto, no un array
    // por lo que se tiene que recorrer el array y añadir cada objeto
    // updatedList.forEach((item) => {
    //   setShoppingList(item);
    // });
    setShoppingList(updatedList);
  };
  
  
  useEffect(() => {
    console.log(shoppingList);
  }
  , [shoppingList]);

  const handleClearList = () => {
    setShoppingList([]);
  }

  return (
    <div className={style.shoppingListSidebar}>
      <h2 className={style.title}>Shopping List</h2>
      <ul ref={drop} className={style.shoppingList}>
        {shoppingList.length > 0 ? (
          shoppingList.map((ingredient, index)=> (
          <DraggableIngredientList 
          key={ingredient.id} 
          ingredient={ingredient} 
          index={index}
          moveItem={moveItem} 
          />
        ))): (
        <div>Add Some Ingredient</div>
        )}
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