import React from 'react'
import "../../styles/components/ShopCartCard.scss";

const ShopCartCard = ({title, price, quantity}) => {
  return (
    <div className='ShopCartCard'>
        <div className='ShopCartCard__blocLeft'>
            <img/>
        </div>
        <div className='ShopCartCard__blocCenter'>
            <p className='ShopCartCard__blocCenter--title' >{title}</p>
            <div>Quantité: {quantity.toString()}</div>
           
        </div>
        <div className='ShopCartCard__blocRight'>
            <div>Supp</div>
            <p className='ShopCartCard__blocCenter--price' >{price.toString()} €</p>
        </div>
    </div>
  )
}

export default ShopCartCard;