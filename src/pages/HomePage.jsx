import Navbar from "../components/Navbar";
import Recomendation from "../components/Recomendation";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../components/RecipeDetail";
import IngredientForm from "../components/IngredientForm";
import RecipeDetailsModal from "../components/RecipeDetailsModal";
import Sidebar from "../components/Sidebar";
import style from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className={style.homePage}>
        <Sidebar />
        <RecipeDetail />
        <IngredientForm />
        <RecipeList/>
        {/* <RecipeDetailsModal /> */}
      </main>
    </>
  );
}

export default HomePage;
