import { useState, useEffect} from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContion";
import SingleProduct from "./pages/SingleProduct";
import CartSection from "./pages/CartSection";
import Checkout from "./pages/Checkout";
import BarLoader from "react-spinners/BarLoader";
import { Provider } from 'react-redux';
import { store } from './Redux-tk/Store';


function App() {
   
  let [loading, setLoading] = useState(false);
  
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },4000);
  },[])
  return (
   
    <>
    
      { loading ? 
        
        <div style={{fontFamily:"Bricolage Grotesque", backgroundColor: "#e1f5fe", display: "flex", justifyContent: "center",alignItems: "flex-start",paddingTop: "130px", width: "100%" , height: "100vh" }}>
           <div className='d-block text-center' >
           <h1 className='digit-h mb-4 '>Dogma</h1>
           
           <BarLoader 
           
           color="#36a4d6"
           loading={loading}
           width={170}
           size={30}
           aria-label="Loading Spinner"
           data-testid="loader"
          />
          </div>
          </div>
          :
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
           <Route path="/" element={<Layout id="" />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
             
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<CartSection />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
          
        </Routes>
        </Provider>
      </BrowserRouter>
      }
     
     </>
  );
}

export default App;
