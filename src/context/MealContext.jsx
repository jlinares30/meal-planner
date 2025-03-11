import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import useIngredients from "../hooks/useIngredients";
import useRecipes from "../hooks/useRecipes";

const MealContext = createContext();

const initialState = {
    selectedIngredients: [],
    ingredients: [],
    recipes: []
}
const ingredientsReducer = (state, action) => {

    //state: estado actual
    //action: objeto que contiene el type y el payload
    switch (action.type) {
        case 'SET_INGREDIENTS': 
            return { ...state, ingredients: action.payload };

        case 'ADD_INGREDIENT':
            if (state.ingredients.length === 0) {
                console.warn("No hay ingredientes cargados aún.");
                return state; // Evita que se modifique el estado con un array vacío
            }
            const newIngredients = Object.values(action.payload)
                .filter(ingredient => state.ingredients.some(item => item.name.trim().toLowerCase() === ingredient))
                .filter(ingredient => !state.selectedIngredients.includes(ingredient));

        return {
            ...state,
            selectedIngredients: [...state.selectedIngredients, ...newIngredients] 
        };
        case 'REMOVE_INGREDIENT':
            // filtra los ingredientes que no estan en el estado y los elimina
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.filter(ingredient => ingredient !== action.payload)
            }
        default:
            return state;
    }
}


export const useMeal = () => useContext(MealContext);

export function MealProvider({ children }) {
    const {ingredients} = useIngredients();
    const {recipes} = useRecipes();
    const [state, dispatch] = useReducer(ingredientsReducer, {...initialState, ingredients: ingredients, recipes: recipes});
    //dispatch es una funcion que recibe un objeto con un type y un payload
    //type: string que describe la accion a realizar
    //payload: informacion que se necesita para realizar la accion
    useEffect(() => {
        if (ingredients.length > 0) {
            dispatch({ type: 'SET_INGREDIENTS', payload: ingredients });
        }
    }, [ingredients]); // solo se ejecuta cuando cambia ingredients

    const values = {
        ingredients: state.ingredients,
        recipes: recipes,
        addIngredient: (ingredients) => dispatch({type: 'ADD_INGREDIENT', payload: ingredients}),
        removeIngredient: (ingredient) => dispatch({type: 'REMOVE_INGREDIENT', payload: ingredient}),
        selectedIngredients: state.selectedIngredients,
      }

    return(
        <MealContext.Provider value={values}>
            {children}
        </MealContext.Provider>
    )
}
