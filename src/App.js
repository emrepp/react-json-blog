

import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import AddEditBlog from "./AddEditBlog";
import Blog from "./Blog";
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
          <Route path="/addBlog" element={<AddEditBlog />} />
          <Route path="/editBlog/:id" element={<AddEditBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


