import style from '../styles/FilterBar.module.css';
import { useEffect, useState } from 'react';
import { useMeal } from '../context/MealContext';

function FilterBar() {
  const { filters, recipes, filterRecipes } = useMeal();
  const [localFilters, setLocalFilters] = useState({
    category: [],
    difficulty: [],
    time: []
  });
  const caregories = ["breakfast", "lunch", "dinner"]

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setLocalFilters((prev) => {
      if(checked){
        // si el valor no esta en el array, lo agrega 
        return{
          ...prev,
          [name]: [...prev[name], value]
        }
      } else {
        // si el valor esta en el array, lo elimina
      return {
        ...prev,
        [name]: prev[name].filter((item) => item !== value)
      }
      }
    });
  };

  useEffect(() => {
    filterRecipes(localFilters);
  }, [localFilters]);

  return (
    <div className={style.filterBar}>
      <div className={style.filterGroup}>
        <label htmlFor="category">Category</label>
        <div className={style.checkboxGroup}>
          {caregories.map((category, index) => (
              <div key={index} className={style.optionGroup}>
                <input
                  type="checkbox"
                  id={category}
                  name="category"
                  value={category}
                  checked={localFilters.category.includes(category)}
                  onChange={handleFilterChange}
                />
                <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
              </div>
            ))}
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
    </div>
  );
}

export default FilterBar;