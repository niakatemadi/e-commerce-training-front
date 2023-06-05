import {Routes,Route} from "react-router-dom";
import Home from "../src/pages/Home";
import Authentication from "./pages/Authentication";
import Header from "./components/ui/Header";
import { useState, createContext, useEffect } from "react";
import ShopCart from "./pages/ShopCart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
export const authenticationContext = createContext(null);
export const shopCartContext = createContext(null);

function App(){

  const [productCategory, setProductCategory] = useState();
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
  const [currentUser, setCurrentUser]= useState({});
  const [shopCartList, setShopCartList]=useState([]);

  useEffect(() => {

    console.log("currentUser");
    console.log(currentUser);
    console.log("currentUser");

    const user = JSON.parse(localStorage.getItem('currentUser'));
    let shopCart = JSON.parse(localStorage.getItem('shopCart'));
    
    if(user){
      setCurrentUser(user);
    }

    if(shopCart){
      setShopCartList(shopCart);
    }

  },[])

  useEffect(() => {
    localStorage.setItem("shopCart",JSON.stringify(shopCartList));
  },[shopCartList]);

  return (
    <authenticationContext.Provider value={[currentUser, setCurrentUser]}>
    <shopCartContext.Provider value={[shopCartList, setShopCartList]}>
      <div className="App">   
          <Header setProductCategory = {setProductCategory} />
          <h1>{JSON.stringify(currentUser) == '{}' ? "" : currentUser.firstName}</h1>
          <Routes>
            <Route path="/" element={<Home productCategory ={productCategory} setProductsFilteredByCategory={setProductsFilteredByCategory} productsFilteredByCategory={productsFilteredByCategory} />} />
            <Route path="/shop_cart" element={<ShopCart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/authentication" element={<Authentication />} />
          </Routes>    
      </div>
      </shopCartContext.Provider>
    </authenticationContext.Provider>
  );
}

export default App;
