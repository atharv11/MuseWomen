import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Product from "./components/Product"; // Import Product component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductProvider from "./components/Product_context";
import Account from "./components/Account";
import Favourite from "./components/Favourite";
import ProductList from "./components/ProductList";
import SidebarProvider from "./components/SidebarContext";
import Sidebar from "./components/Sidebar";
import CartProvider from "./components/CartContext";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";
import PopCollection from "./components/PopCollection";
import ProductDetailsPop from "./components/ProductDetailsPop";
import ViewCart from "./components/ViewCart";
const App = () => {
  return (
    <Search>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
       
            <div className="w-full h-full overflow-hidden">
              <Router>
                <Sidebar />
                <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage />} />
              
                  <Route path="/shop" element={<ProductList />} />{" "}
                  <Route path="/pop-collection" element={<PopCollection />} />
                  {/* Add route for shop */}
                  <Route path="/popeye/:id" element={<ProductDetailsPop />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/Favourite" element={<Favourite />} />
                  <Route path="/Account" element={<Account />} />
                  <Route path="/viewcart" element={<ViewCart />} />
                </Routes>
                <Footer />
              </Router>
            </div>
      
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
        </Search>
  );
};

export default App;
