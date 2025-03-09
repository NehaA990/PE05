import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";
import "./style/App.css"; // Updated path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
