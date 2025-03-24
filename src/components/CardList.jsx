import { useMeal } from '../context/MealContext';
import style from '../styles/CardList.module.css';
import Card from './Card';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

function CardList({location, products }) {
  const {selectedIngredients, allPercentageOrdered, productSearched, recipesFiltered, recipes} = useMeal()
  const [recipesToRender, setRecipesToRender] = useState([]);

  useEffect(() => {
    setRecipesToRender(recipesFiltered)
    console.log("recipesFiltered ha cambiado:", recipesFiltered);
  }, [recipesFiltered]);
  useEffect(() => {
    setRecipesToRender(allPercentageOrdered)
    console.log("allPercentageOrdered ha cambiado:", allPercentageOrdered);
  }, [allPercentageOrdered]);



  const recipeListClasses = classNames(
    style.recipeListHomePage,
    {
      [style.recipePage]: location !== "home",
    }
  );
  return (
    <>
      <div className={recipeListClasses}>
        { (recipesToRender.length > 0 && location === "home") ? (
          recipesToRender.map((product, index) => (
            <Card key={index} product={product} />
          )))
          : (
            (productSearched.length > 0 ? productSearched : products).map((product, index) => (
              <Card key={index} product={product} />
            ))
          )
        }
      </div>
    </>
  );
}

export default CardList;