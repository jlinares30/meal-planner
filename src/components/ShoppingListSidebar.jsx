import style from '../styles/ShoppingListSidebar.module.css';

function ShoppingListSidebar() {
  return (
    <div className={style.shoppingListSidebar}>
      <h2 className={style.title}>Shopping List</h2>
      <ul className={style.shoppingList}>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
        <li className={style.itemList}>
          <div className={style.nameDotsContainer}>
            <img src="src/assets/grid-dots.svg" alt="grid-dots" />
            <div className={style.nameItem}>Apples</div>
          </div>
          <div className={style.price}>2</div>
        </li>
      </ul>
      <div className={style.buttonContainer}>
        <button className={style.button}>Clear List</button>
      </div>
      <div className={style.budget}>
        Estimated Budget: $50
      </div>
    </div>
  );
}

export default ShoppingListSidebar;