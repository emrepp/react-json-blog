

import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import AddEditRecipe from "./AddEditRecipe";
import Recipe from "./Recipe";
import About from "./About";
import NotFound from "./NotFound"

import Header from "./Header";
import './App.css';



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
     <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<AddEditRecipe />} />
          <Route path="/editRecipe/:id" element={<AddEditRecipe />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


