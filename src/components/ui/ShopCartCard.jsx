import React from 'react'
import "../../styles/components/ShopCartCard.scss";
import { useContext } from 'react';
import { shopCartContext } from '../../App';

const ShopCartCard = ({title, price, quantity}) => {

  const [shopCartList, setShopCartList] = useContext(shopCartContext);

  function DeleteShopCartProduct(title){
    const shopCartListUpdated = shopCartList.filter((product) => product.title != title);

    localStorage.setItem("shopCart",shopCartListUpdated);
    setShopCartList(shopCartListUpdated);

  }

  return (
    <div className='ShopCartCard'>
        <div className='ShopCartCard__blocLeft'>
            <img />
        </div>
        <div className='ShopCartCard__blocCenter'>
            <p className='ShopCartCard__blocCenter--title' >{title}</p>
            <div>Quantité: {quantity.toString()}</div>
            <div onClick={() => DeleteShopCartProduct(title)}> Supprimer</div>
           
        </div>
        <div className='ShopCartCard__blocRight'>
            <div>Supp</div>
            <p className='ShopCartCard__blocCenter--price' >{price.toString()} €</p>
        </div>
    </div>
  )
}

export default ShopCartCard;