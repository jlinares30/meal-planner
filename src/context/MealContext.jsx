import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import useIngredients from "../hooks/useIngredients";
import useRecipes from "../hooks/useRecipes";
import { use } from "react";

const MealContext = createContext();

const initialState = {
    selectedIngredients: [],
    ingredientsRecipeDetails: [],
    ingredients: [],
    recipes: [],
    selectedRecipe: {},
    isOpenRecipeModal: false
}
const ingredientsReducer = (state, action) => {

    //state: estado actual
    //action: objeto que contiene el type y el payload
    switch (action.type) {
        case 'SET_INGREDIENTS': 
            return { ...state, ingredients: action.payload };
        case 'SET_RECIPES':
            return { ...state, recipes: action.payload };
        case 'ADD_INGREDIENT':
            if (state.ingredients.length === 0) {
                console.warn("No hay ingredientes cargados aún.");
                return state; // Evita que se modifique el estado con un array vacío
            }
            const normalizeText = (text) => {
                return text
                // .normalize("NFD") 
                // .replace(/[\u0300-\u0308]/g, "")
                // .normalize("NFC")
                .toLowerCase(); 
              };
            const newIngredients = action.payload
                .filter(ingredient => state.ingredients.some(item => normalizeText(item.name.trim()) === ingredient))
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
        case 'RECIPE_DETAILS':
            // console.log(action.payload);
            return {
                ...state,
                selectedRecipe: action.payload
            }
        case 'OPEN_RECIPE_MODAL':
            return {
                ...state,
                isOpenRecipeModal: !state.isOpenRecipeModal
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
    useEffect(() => {
        if (recipes.length > 0) {
            dispatch({ type: 'SET_RECIPES', payload: recipes });
        }
    }, [recipes]); // solo se ejecuta cuando cambia recipes

    const values = {
        ingredients: state.ingredients,
        recipes: state.recipes,
        addIngredient: (ingredients) => dispatch({type: 'ADD_INGREDIENT', payload: ingredients}),
        removeIngredient: (ingredient) => dispatch({type: 'REMOVE_INGREDIENT', payload: ingredient}),
        selectedIngredients: state.selectedIngredients,
        selectedRecipe: state.selectedRecipe,
        showRecipeDetails: (recipe) => dispatch({type: 'RECIPE_DETAILS', payload: recipe}),
        ingredientsRecipeDetails: state.ingredientsRecipeDetails,
        isOpenRecipeModal: state.isOpenRecipeModal,
        openRecipeModal: () => dispatch({type: 'OPEN_RECIPE_MODAL'})
      }

    return(
        <MealContext.Provider value={values}>
            {children}
        </MealContext.Provider>
    )
}
