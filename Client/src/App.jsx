import Nav from "./components/Navigation/Nav"
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Contact from "./components/Contact/Contact";
import Account from "./components/Account/Account";
import Admin from "./components/Admin/Admin";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from './components/RedirectIfLoggedIn';
import AdminRoute from "./components/AdminRoute";

function App() {


  return (
    <>
    
      <ScrollToTop/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/auth" element={<RedirectIfLoggedIn><Auth/></RedirectIfLoggedIn>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>}/>
      </Routes>
    
    </>
  )
}

export default App
