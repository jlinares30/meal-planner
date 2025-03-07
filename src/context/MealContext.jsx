import { useContext } from "react";
import { createContext } from "react";
import useIngredients from "../hooks/useIngredients";
import useRecipes from "../hooks/useRecipes";

const MealContext = createContext();

export const useMeal = () => useContext(MealContext);

export function MealProvider({ children }) {
    const {ingredients} = useIngredients();
    const {recipes} = useRecipes();
    const values = {
        ingredients: ingredients,
        recipes: recipes
      }

    return(
        <MealContext.Provider value={values}>
            {children}
        </MealContext.Provider>
    )
}
