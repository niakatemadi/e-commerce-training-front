import {Routes,Route} from "react-router-dom";
import Home from "../src/pages/Home";
import Authentication from "./pages/Authentication";
import Header from "./components/ui/Header";
import { useState, createContext, useEffect } from "react";

export const authenticationContext = createContext(null);

function App(){

  const [productCategory, setProductCategory] = useState();
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
  const [currentUser, setCurrentUser]= useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    if(user){
      setCurrentUser(user);
    }
    
  },[])

  return (
    <authenticationContext.Provider value={[currentUser, setCurrentUser]}>
      <div className="App">   
          <Header setProductCategory = {setProductCategory} />
          <h1>{JSON.stringify(currentUser) == '{}' ? "" : currentUser.firstName}</h1>
          <Routes>
            <Route path="/" element={<Home productCategory ={productCategory} setProductsFilteredByCategory={setProductsFilteredByCategory} productsFilteredByCategory={productsFilteredByCategory} />} />
            <Route path="/authentication" element={<Authentication />} />
          </Routes>    
      </div>
    </authenticationContext.Provider>
  );
}

export default App;
