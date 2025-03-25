import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import useIngredients from "../hooks/useIngredients";
import useRecipes from "../hooks/useRecipes";

const MealContext = createContext();

const initialState = {
    selectedIngredients: [],
    ingredientsRecipeDetails: [],
    ingredients: [],
    recipes: [],
    selectedRecipe: {},
    isOpenRecipeModal: false,
    percentage: 0, 
    allPercentageOrdered: [],
    recipesFiltered: [],
    productSearched: '',
    shoppingList: [],
    filters:{
        category: [],
        difficulty: [],
        time: []
    }
}
const ingredientsReducer = (state, action) => {

    //state: estado actual
    //action: objeto que contiene el type y el payload
    switch (action.type) {
        case 'SET_INGREDIENTS': 
            return { ...state, ingredients: action.payload };
        case 'SET_RECIPES':
            return { ...state, recipes: action.payload};
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
        case 'CALCULATE_PERCENTAGE':
            return {
                ...state,
                percentage: action.payload
            }
        case 'CALCULATE_ALL_PERCENTAGE':
            state.ingredients //array de ingredientes 
            state.selectedRecipe //objeto con la receta seleccionada
            state.selectedIngredients //array con los ingredientes seleccionados
            state.recipes //array con todas las recetas
            //buscar los ingredientes seleccionados en todas las recetas para calcular el porcentaje de recetas que se pueden hacer con esos ingredientes
            //recorrer todas las recetas

            //transformar los ingredientes seleccionados a un array de ids
            const transformedIngredients = state.selectedIngredients.map(ingredient => {
                const foundIngredient = state.ingredients.find(ing => ing.name.toLowerCase() === ingredient);
                return foundIngredient ? foundIngredient.id : null;
            }).filter(Boolean); 

            // ARRAY DE OBJETOS DE LAS RECETAS CON EL PORCENTAJE DE INGREDIENTES
            const recipesWithPercentage = 
            (state.recipesFiltered.length > 0 ? state.recipesFiltered : state.recipes).map(recipe => {
                const percentage = recipe.ingredients.filter(ingredient => transformedIngredients.includes(ingredient)).length * 100 / recipe.ingredients.length;
                return {
                    ...recipe,
                    percentage
                }
            })
            //alamcenar un array con los porcentajes de las recetas ordenados
            const sortedRecipes = recipesWithPercentage.sort((a, b) => b.percentage - a.percentage);
            
            return {
                ...state,
                allPercentageOrdered: sortedRecipes
            }



        case 'FILTER_RECIPES':
            const { category, difficulty, time } = action.payload;

            //cuando se filtran recetas se vuelve a calcular el porcentaje de ingredientes
            // Bloque de filtrar recetas
            const recipesFiltered = state.recipes.filter(recipe => {
                const categoryMatch = category.length === 0 || category.includes(recipe.category.toLowerCase());
                const difficultyMatch = difficulty.length === 0 || difficulty.includes(recipe.difficulty.toLowerCase());
                const timeMatch = time.length === 0 || time.includes(recipe.time);
                if(!categoryMatch && !difficultyMatch && !timeMatch) {
                    return recipe;
                }
                return categoryMatch && difficultyMatch && timeMatch;
            });

            
            
            //bloque de calcular porcentaje de ingredientes
            const transformedIngredients2 = state.selectedIngredients.map(ingredient => {
                const foundIngredient = state.ingredients.find(ing => ing.name.toLowerCase() === ingredient);
                return foundIngredient ? foundIngredient.id : null;
            }).filter(Boolean); 

            // ARRAY DE OBJETOS DE LAS RECETAS CON EL PORCENTAJE DE INGREDIENTES
            const recipesWithPercentage2 = 
                recipesFiltered.map(recipe => {
                const percentage = recipe.ingredients.filter(ingredient => transformedIngredients2.includes(ingredient)).length * 100 / recipe.ingredients.length;
                return {
                    ...recipe,
                    percentage
                }
            })
            //alamcenar un array con los porcentajes de las recetas ordenados
            const sortedRecipes2 = recipesWithPercentage2.sort((a, b) => b.percentage - a.percentage);
        
            return {
                ...state,
                recipesFiltered : sortedRecipes2,
                filters: action.payload
            };
        case 'SET_PRODUCT_SEARCHED':
            return {
                ...state,
                productSearched: action.payload
            }
        case 'SET_SHOPPING_LIST':
            if(action.payload.length === 0) {
                return {
                    ...state,
                    shoppingList: action.payload
                }
            }
            if(state.shoppingList.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.payload]
            }
        case 'REMOVE_SHOPPING_LIST':
            return {
                ...state,
                shoppingList: state.shoppingList.filter(item => item !== action.payload)
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
        percentage: state.percentage,
        setPercentage: (percentage) => dispatch({type: 'CALCULATE_PERCENTAGE', payload: percentage}),
        recipes: state.recipes,
        addIngredient: (ingredients) => dispatch({type: 'ADD_INGREDIENT', payload: ingredients}),
        removeIngredient: (ingredient) => dispatch({type: 'REMOVE_INGREDIENT', payload: ingredient}),
        selectedIngredients: state.selectedIngredients,
        selectedRecipe: state.selectedRecipe,
        showRecipeDetails: (recipe) => dispatch({type: 'RECIPE_DETAILS', payload: recipe}),
        ingredientsRecipeDetails: state.ingredientsRecipeDetails,
        isOpenRecipeModal: state.isOpenRecipeModal,
        openRecipeModal: () => dispatch({type: 'OPEN_RECIPE_MODAL'}),
        allPercentageOrdered: state.allPercentageOrdered,
        setAllPercentage: () => dispatch({type: 'CALCULATE_ALL_PERCENTAGE'}),
        filters: state.filters,
        recipesFiltered: state.recipesFiltered,
        filterRecipes: (filters) => {
            const updatedFilters = {
                category: filters.category || state.filters.category,
                difficulty: filters.difficulty || state.filters.difficulty,
                time: filters.time || state.filters.time
              };
              dispatch({ type: 'FILTER_RECIPES', payload: updatedFilters });
        },
        productSearched: state.productSearched,
        setProductSearched: (product) => dispatch({type: 'SET_PRODUCT_SEARCHED', payload: product}),
        shoppingList: state.shoppingList,
        setShoppingList: (item) => dispatch({type: 'SET_SHOPPING_LIST', payload: item}),
        removeShoppingList: (item) => dispatch({type: 'REMOVE_SHOPPING_LIST', payload: item})
      }

    return(
        <MealContext.Provider value={values}>
            {children}
        </MealContext.Provider>
    )
}
