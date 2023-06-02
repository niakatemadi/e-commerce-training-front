import "../styles/pages/ShopCart.scss";
import ShopCartCard from "../components/ui/ShopCartCard";
import React from 'react';
import { useContext } from "react";
import { shopCartContext } from "../App";

function TotalPriceOfShopCart(shopCartList){

  const sum = shopCartList.reduce((accumulator, product) => {

    const productPrice = product.quantity * product.price;

    return accumulator + productPrice;

  }, 0);

  return sum;

};
function SumProductsInShopCart(shopCartList){

  const sum = shopCartList.reduce((accumulator, product) => {

    return accumulator + product.quantity;

  }, 0);

  return sum;

};


const ShopCart = () => {

  const [shopCartList, setShopCartList] = useContext(shopCartContext);

  const totalPrice = TotalPriceOfShopCart(shopCartList);
  const sumProducts = SumProductsInShopCart(shopCartList);
 
  return (
    <div className='ShopCart'>
      <div className="ShopCart__products">
        { shopCartList.map((product) => <ShopCartCard title={product.title} price={product.price} quantity={product.quantity} />) }
      </div>
      <div className="ShopCart__confirmOrderBloc">
        <p>Votre commande est éligible à la livraison Standard gratuite en France métropolitaine.</p>
        <p>Sous-total ({sumProducts} articles) : {totalPrice} €</p>
        <div className="ShopCart__confirmOrderButton">Passez la commande</div>
      </div>
    </div>
  )
}

export default ShopCart;