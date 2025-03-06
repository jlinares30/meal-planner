import style from '../styles/IngredientsPage.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CardList from '../components/CardList';
import ShoppingListSidebar from '../components/ShoppingListSidebar';

function IngredientsPage({ location }) {
  return (
    <>
      <Navbar location={location}/>
      <main className={style.ingredientsPage}>
        <Sidebar location={'page'}/>
        <ShoppingListSidebar />
        <CardList location={'page'}/>
      </main>
    </>
  );
}

export default IngredientsPage;