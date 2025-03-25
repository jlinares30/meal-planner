import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import IngredientsPage from './pages/IngredientsPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'

function App() {
 return (
    <DndProvider backend={HTML5Backend}>
    <Routes>
        <Route path="/" element={<HomePage location={'home'} />} />
        <Route path="/recipes" element={<RecipePage location={'recipe-page'} />} />
        <Route path="/ingredients" element={<IngredientsPage location={'ingredient-page'}/>} />
    </Routes>
    </DndProvider>
     )
}

export default App
