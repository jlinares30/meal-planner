import Navbar from "../components/Navbar";
import Recomendation from "../components/Recomendation";
import CardList from "../components/CardList";
import RecipeDetail from "../components/RecipeDetail";
import IngredientForm from "../components/IngredientForm";
import RecipeDetailsModal from "../components/RecipeDetailsModal";
import Sidebar from "../components/Sidebar";
import style from "../styles/HomePage.module.css";

function HomePage({ location }) {
  return (
    <>
      <Navbar location={location}/>
      <main className={style.homePage}>
        <Sidebar location={'home'}/>
        <RecipeDetail />
        <IngredientForm />
        <CardList location={'home'}/>
        {/* <RecipeDetailsModal /> */}
      </main>
    </>
  );
}

export default HomePage;
