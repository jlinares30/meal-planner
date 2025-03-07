import style from '../styles/Card.module.css';

function Card({ product }) {
  return (
    <div className={style.recipeCard}>
      <img src='src/assets/profile.jpg' alt='img' />
      <div className={style.infoContainer}>
        <h2 className={style.title}>{product.name}</h2>
        <p className={style.description}>{product.category}</p>
      </div>
    </div>
  );
}

export default Card;