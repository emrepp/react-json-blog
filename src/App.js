
import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddEditBlog from ".pages/AddEditBlog";
import Blog from ".pages/Blog";
import About from ".pages/About";



function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/addBlog" element = {<AddEditBlog />} />
        <Route path="/Blog/:id" element = {<Blog />} />
        <Route path="/about" element = {<About />} />
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
