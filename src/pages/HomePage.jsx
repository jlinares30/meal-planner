import Navbar from "../components/Navbar";
import Recomendation from "../components/Recomendation";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";
import IngredientForm from "../components/IngredientForm";
import RecipeDetailsModal from "../components/RecipeDetailsModal";
import style from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <>
    <Navbar />
    <main className={style.homePage}>
      <RecipeDetail />
      <IngredientForm />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      {/* <RecipeDetailsModal /> */}
    </main>
    </>
  );
}

export default HomePage;
