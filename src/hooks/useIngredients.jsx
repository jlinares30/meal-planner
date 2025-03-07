import { useEffect, useState } from "react";

const useIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch('src/ingredients.json');
                if (!response.ok) {
                    throw new Error('Ha ocurrido un error');
                }
                const data = await response.json();
                setIngredients(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchIngredients();
    }
    , []); // array vacio para que solo se ejecute una vez
    return { ingredients, loading, error };
}

export default useIngredients;