import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import IngredientsPage from './pages/IngredientsPage'
import './App.css'

function App() {
 return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
    </Routes>
     )
}

export default App
