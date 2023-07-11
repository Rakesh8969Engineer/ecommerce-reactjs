import Annoucne from "./components/Annoucne";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/log-in" element={<Login/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>


        </Routes>
  
    </div>
  );
}

export default App;
