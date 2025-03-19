import { useMeal } from '../context/MealContext';
import style from '../styles/CardList.module.css';
import Card from './Card';
import classNames from 'classnames';

function CardList({location, products }) {
  const {selectedIngredients, allPercentage} = useMeal()

  const recipeListClasses = classNames(
    style.recipeListHomePage,
    {
      [style.recipePage]: location !== "home",
    }
  );
  return (
    <>
      <div className={recipeListClasses}>
        { (selectedIngredients.length > 0 && location === "home") ? (
          allPercentage.map((product, index) => (
            <Card key={index} product={product} />
          )))
          : (
            products.map((product, index) => (
              <Card key={index} product={product} />
            ))
          )
        }
      </div>
    </>
  );
}

export default CardList;