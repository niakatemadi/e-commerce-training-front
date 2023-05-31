import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ui/ProductCard";
import "../styles/pages/Home.scss";

function Home({productCategory,setProductsFilteredByCategory, productsFilteredByCategory}){

    const [allProducts, setAllProducts] = useState([]);
    const displayedProducts = productsFilteredByCategory?.length > 0 ? productsFilteredByCategory : allProducts;

    useEffect(() => {
        fetch("http://localhost:4000/products/getAllProducts").then((response) => response.json()).then((datas) => setAllProducts(datas));
    },[]);

    useEffect(() => {
        const url = `http://localhost:4000/products/${productCategory}`;
       fetch(url).then((response) => response.json()).then((datas) => setProductsFilteredByCategory(datas));
    },[productCategory]);

    
return (
    <>
        <div className="ProductContainer" > {    
            displayedProducts.map((product, index) => <ProductCard product={product} key={index}/>)
        }</div>
    </>
)
}

export default Home;