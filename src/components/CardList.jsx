import { useMeal } from '../context/MealContext';
import style from '../styles/CardList.module.css';
import Card from './Card';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

function CardList({location, products }) {
  const {selectedIngredients, allPercentageOrdered, filters, recipesFiltered, recipes} = useMeal()
  const [recipesToRender, setRecipesToRender] = useState([]);
  // const recipesToRender = recipesFiltered.length > 0 ? recipesFiltered : allPercentageOrdered.length > 0 ? allPercentageOrdered : recipes;
  // useEffect(() => {
  //   console.log("recipesToRender ha cambiado:", recipesToRender);
  //   console.log("recipesFiltered ha cambiado:", recipesFiltered);
  //   console.log("allPercentageOrdered ha cambiado:", allPercentageOrdered);
  // }, [recipesToRender, recipesFiltered,allPercentageOrdered]);

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