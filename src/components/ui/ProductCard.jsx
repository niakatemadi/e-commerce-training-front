import "../../styles/components/ProductCard.scss";
import { useContext, useState } from "react";
import { shopCartContext } from "../../App";

function ProductCard({product}){

    const [shopCartList, setShopCartList] = useContext(shopCartContext); 

    console.log("pppp");
    console.log(shopCartList);
    console.log("pppp");

    function addProductToShopCart(){

        let isProductInShopCart = false;

        if(shopCartList.length == 0){

            const firstProductAdded = {...product, "quantity": 1};
            setShopCartList([...shopCartList, firstProductAdded]);

            return;
        }

       const newShopCartList = shopCartList.map((element) => {

            if(element.title == product.title){

                isProductInShopCart = !isProductInShopCart;
               
                return {...element, "quantity": element.quantity + 1};
               
            }

            return element;

       });

       if(isProductInShopCart){

        setShopCartList(newShopCartList);

       }else{

         const productAdded = {...product, "quantity": 1};
        setShopCartList([...newShopCartList, productAdded]);

       }
    }

    return (    
        <div className="Card">
            <div className="Card_img"></div>
            <p className="Card_title">{product.title}</p>
            <p className="Card_description">{product.description}</p>
            <div className="Card_button">
                <p onClick={addProductToShopCart}>Ajouter</p>
                <p>{product.price} €</p> 
            </div>                     
        </div>
    )
}

export default ProductCard;