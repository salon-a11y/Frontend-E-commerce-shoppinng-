import "./App.css";
import Navbar from "./component/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from "./Pages/Cart.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import men_banner from './Component/assets/banner_mens.png'
import womens_banner from './Component/assets/banner_women.png'
import kid_banner from './Component/assets/banner_kids.png'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner}  category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
