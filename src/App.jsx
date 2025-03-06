import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import IngredientsPage from './pages/IngredientsPage'
import './App.css'

function App() {
 return (
    <Routes>
        <Route path="/" element={<HomePage location={'home'} />} />
        <Route path="/recipes" element={<RecipePage location={'recipe-page'} />} />
        <Route path="/ingredients" element={<IngredientsPage location={'ingredient-page'}/>} />
    </Routes>
     )
}

export default App
