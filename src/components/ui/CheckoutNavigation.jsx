import React from 'react'
import "../../styles/components/CheckoutNavigation.scss";
import { NavLink } from 'react-router-dom';

const CheckoutNavigation = () => {
  return (
    <nav className="CheckoutNavigation"><ul><NavLink to="/shop_cart"><li className='CheckoutNavigation__stepOne'><div><span>1</span></div><p>Panier</p></li></NavLink><li  className='CheckoutNavigation__stepTwo'><div><span>2</span></div><p>Livraison et Paiement</p></li></ul></nav>
  )
}

export default CheckoutNavigation;