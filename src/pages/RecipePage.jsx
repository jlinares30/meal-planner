import style from '../styles/IngredientsPage.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CardList from '../components/CardList';
import ShoppingListSidebar from '../components/ShoppingListSidebar';
import { useMeal } from '../context/MealContext';

function RecipePage({ location }) {
    const { recipes } = useMeal()
    return (
        <>
      <Navbar location={location}/>
      <main className={style.ingredientsPage}>
        <Sidebar location={'page'}/>
        <ShoppingListSidebar />
        <CardList location={'page'} products={recipes}/>
      </main>
    </>
    );
}

export default RecipePage;