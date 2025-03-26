import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import RecipeDetail from "../components/RecipeDetail";
import IngredientForm from "../components/IngredientForm";
import RecipeDetailsModal from "../components/RecipeDetailsModal";
import Sidebar from "../components/Sidebar";
import style from "../styles/HomePage.module.css";
import { useMeal } from "../context/MealContext";

function HomePage({ location }) {
  const { recipes, isOpenRecipeModal } = useMeal();

  return (
    <>
      <Navbar location={location}/>
      <main className={style.homePage}>
        {/* <FilterBar /> */}
        <Sidebar location={'home'}/>
        <RecipeDetail/>
        <IngredientForm />
        <CardList location={'home'} products={recipes}/>
        {isOpenRecipeModal && <RecipeDetailsModal />}
      </main>
    </>
  );
}

export default HomePage;
