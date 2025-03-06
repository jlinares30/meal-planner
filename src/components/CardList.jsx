import style from '../styles/CardList.module.css';
import Card from './Card';
import classNames from 'classnames';

function CardList({location}) {
  const recipeListClasses = classNames(
    style.recipeListHomePage,
    {
      [style.recipePage]: location !== "home",
    }
  );
  return (
    <>
      <div className={recipeListClasses}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </>
  );
}

export default CardList;