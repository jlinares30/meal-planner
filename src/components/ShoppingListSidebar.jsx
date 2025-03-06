import style from '../styles/ShoppingListSidebar.module.css';

function ShoppingListSidebar() {
  return (
    <div className={style.shoppingListSidebar}>
      <h2>Shopping List</h2>
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Carrots</li>
      </ul>
    </div>
  );
}

export default ShoppingListSidebar;