import style from '../styles/FilterBar.module.css';
import { useState } from 'react';

function FilterBar({ onFilterChange }) {
  const [mealType, setMealType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ mealType, difficulty, time });
  };

  return (
    <div className={style.filterBar}>
      <div className={style.filterGroup}>
        <label htmlFor="category">Category</label>
        <div className={style.checkboxGroup}>
          <div className={style.optionGroup}>
            <input className={style.inputCheckbox} id='breakfast' type="checkbox" />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className={style.optionGroup}>
            <input id='lunch' type="checkbox" />
            <label htmlFor="lunch">Lunch</label>
          </div>
          <div className={style.optionGroup}>
            <input id='dinner' type="checkbox" />
            <label htmlFor="dinner">Dinner</label>
          </div>
        </div>
      </div>
      <div className={style.filterGroup}>
        <label htmlFor="difficulty">Difficulty</label>
        <div className={style.checkboxGroup}>
          <div className={style.optionGroup}>
            <input id='easy' type="checkbox" />
            <label htmlFor="easy">Easy</label>
          </div>
          <div className={style.optionGroup}>
            <input id='medium' type="checkbox" />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className={style.optionGroup}>
            <input id='hard' type="checkbox" />
            <label htmlFor="hard">Hard</label>
          </div>
        </div>
      </div>
      <div className={style.filterGroup}>
        <label htmlFor="time">Time</label>
        <div className={style.checkboxGroup}>
          <div className={style.optionGroup}>
            <input id='less15' type="checkbox" />
            <label htmlFor="less15">Less than 15 minutes</label>
          </div>
          <div className={style.optionGroup}>
            <input id='less30' type="checkbox" />
            <label htmlFor="less30">Less than 30 minutes</label>
          </div>
          <div className={style.optionGroup}>
            <input id='lesshour' type="checkbox" />
            <label htmlFor="lesshour">Less than 1 hour</label>
          </div>
        </div>
      </div>
      <button className={style.filterButton} onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default FilterBar;