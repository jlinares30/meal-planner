import style from '../styles/CardList.module.css';
import Card from './Card';
import classNames from 'classnames';

function CardList({location, products}) {
  const recipeListClasses = classNames(
    style.recipeListHomePage,
    {
      [style.recipePage]: location !== "home",
    }
  );
  return (
    <>
      <div className={recipeListClasses}>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
        {console.log(products)}

      </div>
    </>
  );
}

export default CardList;