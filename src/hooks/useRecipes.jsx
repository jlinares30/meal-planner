import { useEffect, useState } from "react";

const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchRecipes = async () => {
            try {
                const response = await fetch('src/recipes.json');
                if (!response.ok){
                    throw new Error('Ha ocurrido un error');
                }
                const data = await response.json();
                setRecipes(data);
                
            } catch (error) {
                setError(error.message);
                
            }finally{
                setLoading(false);
            }
        }
        fetchRecipes();
    }
    , []); // array vacio para que solo se ejecute una vez
    return { recipes, loading, error };
}

export default useRecipes;