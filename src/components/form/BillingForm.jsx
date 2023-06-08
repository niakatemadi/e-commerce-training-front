import React from 'react';
import "../../styles/components/ShippingForm.scss";

const BillingForm = ({billingAddress,setBillingAddress,billingFormValidator}) => {

    console.log("billingAddress in billing form");
    console.log(billingAddress);

    function Billing(e){
        e.preventDefault();
    
        setBillingAddress({...billingAddress,[e.target.name]: e.target.value});
    
    }
  return (
    <div className='BlocOne'>
        <form action="">
            <div className='BlocOne__doubleInput'> 
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Prénom</label>
                    <input className='BlocOne__inputBloc--input' placeholder=' Prénom' type="text" name='firstName' onChange={(e) => Billing(e)} /> 
                    {billingFormValidator.firstName == true ? "" : <span>Veuillez entrer votre prénom</span>}
                </div>
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Nom</label>
                    <input className='BlocOne__inputBloc--input'  placeholder=' Nom' type="text" name='name' onChange={(e) => Billing(e)} /> 
                    {billingFormValidator.name == true ? "" : <span>Veuillez entrer votre nom</span>}
                </div>
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor=""> Adresse de livraison</label>
                <input className='BlocOne__inputBloc--input'  placeholder=' Adresse de livraison' type="text" name='street' onChange={(e) => Billing(e)} /> 
                {billingFormValidator.street == true ? "" : <span>Veuillez entrer votre rue</span>}
            </div>
            <div className='BlocOne__doubleInput'> 
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Code postal</label>
                    <input className='BlocOne__inputBloc--input'  placeholder=' Code postal' type="text" name='postalCode' onChange={(e) => Billing(e)} />
                    {billingFormValidator.postalCode == true ? "" : <span>Veuillez entrer votre code postal</span>}
                </div>
                <div className='BlocOne__inputBloc BlocOne__doubleInput--input'>
                    <label htmlFor=""> Ville</label>
                    <input className='BlocOne__inputBloc--input'  placeholder=' Ville' type="text" name='city' onChange={(e) => Billing(e)} /> 
                    {billingFormValidator.city == true ? "" : <span>Veuillez entrer votre prénom</span>}
                </div>
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor="">Pays</label>
                <input className='BlocOne__inputBloc--input'  placeholder=' Pays' type="text" name='country' onChange={(e) => Billing(e)} /> 
                {billingFormValidator.country == true ? "" : <span>Veuillez entrer votre pays</span>}
            </div>
            <div className='BlocOne__inputBloc'>
                <label htmlFor="">Téléphone</label>
                <input className='BlocOne__inputBloc--input'  placeholder=' Téléphone' type="text" name='phoneNumber' onChange={(e) => Billing(e)} /> 
                {billingFormValidator.phoneNumber == true ? "" : <span>Veuillez entrer votre numéro de téléphone</span>}
            </div>
                        
        </form>
    </div>
  )
}

export default BillingForm;