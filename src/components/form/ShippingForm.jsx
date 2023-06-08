import React from 'react';
import "../../styles/components/ShippingForm.scss";

const ShippingForm = ({shippingAddress, setShippingAddress, billingAddress, setBillingAddress, shippingFormValidator}) => {

function Shipping(e){
    e.preventDefault();

    setShippingAddress({...shippingAddress,[e.target.name]: e.target.value});
    setBillingAddress({...billingAddress,[e.target.name]: e.target.value});

}
    
  return (
    <div className='BlocOne'>
        <form action="">
            <div className='BlocOne__doubleInput'> 
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Prénom</label>
                    <input className='BlocOne__inputBloc--input' name="firstName" placeholder=' Prénom' type="text" onChange={(e) => Shipping(e)}  /> 
                    {shippingFormValidator.firstName == true ? "" : <span>Veuillez entrer votre prénom</span>}
                </div>
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Nom</label>
                    <input className='BlocOne__inputBloc--input' name="name"  placeholder=' Nom' type="text" onChange={(e) => Shipping(e)}  /> 
                    {shippingFormValidator.name == true ? "" : <span>Veuillez entrer votre nom</span>}
                </div>
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor=""> Adresse de livraison</label>
                <input className='BlocOne__inputBloc--input' name="street" placeholder=' Adresse de livraison' type="text" onChange={(e) => Shipping(e)}  /> 
                {shippingFormValidator.street == true ? "" : <span>Veuillez entrer votre nom de rue</span>}
            </div>
            <div className='BlocOne__doubleInput'> 
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Code postal</label>
                    <input className='BlocOne__inputBloc--input' name="postalCode" placeholder=' Code postal' type="text" onChange={(e) => Shipping(e)}  /> 
                    {shippingFormValidator.postalCode == true ? "" : <span>Veuillez entrer votre code postal</span>}
                </div>
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Ville</label>
                    <input className='BlocOne__inputBloc--input' name="city" placeholder=' Ville' type="text" onChange={(e) => Shipping(e)}  /> 
                    {shippingFormValidator.city == true ? "" : <span>Veuillez entrer votre nom de ville</span>}
                </div>
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor="">Pays</label>
                <input className='BlocOne__inputBloc--input' name="country" placeholder=' Pays' type="text" onChange={(e) => Shipping(e)}  /> 
                {shippingFormValidator.country == true ? "" : <span>Veuillez entrer votre pays</span>}
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor="">Téléphone</label>
                <input className='BlocOne__inputBloc--input' name="phoneNumber" placeholder=' Téléphone' type="text" onChange={(e) => Shipping(e)} /> 
                {shippingFormValidator.phoneNumber == true ? "" : <span>Veuillez entrer votre numéro de téléphone</span>}
            </div>
                        
        </form>
    </div>
  )
}

export default ShippingForm;