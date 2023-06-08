import React, { useEffect } from 'react';
import CheckoutNavigation from '../components/ui/CheckoutNavigation';
import "../styles/pages/PaymentAndDelivery.scss";
import ShippingForm from '../components/form/ShippingForm';
import BillingForm from '../components/form/BillingForm';
import { useState } from 'react';

const PaymentAndDelivery = () => {

const [shippingAddress, setShippingAddress] = useState({
    city: "",
    country: "",
    firstName: "",
    name: "",
    phoneNumber: "",
    postalCode: "",
    street: ""
});

const [billingAddress, setBillingAddress] = useState({
    city: "",
    country: "",
    firstName: "",
    name: "",
    phoneNumber: "",
    postalCode: "",
    street: ""
});

const [shippingFormValidator, setShippingFormValidator] = useState({
    city: true,
    country: true,
    firstName: true,
    name: true,
    phoneNumber: true,
    postalCode: true,
    street: true
});

const [billingFormValidator, setBillingFormValidator] = useState({
    city: true,
    country: true,
    firstName: true,
    name: true,
    phoneNumber: true,
    postalCode: true,
    street: true
});

console.log("shippingFormValidator");
console.log(shippingFormValidator);
console.log("shippingFormValidator");

console.log("billingFormValidator");
console.log(billingFormValidator);
console.log("billingFormValidator");

console.log("billingAddress");
console.log(billingAddress);
console.log("billingAddress");

const [paymentMode, setPaymentMode] = useState({});

const [creditCardDetails, setCreditCardDetails] = useState({});

const shopCartAmount = 500;
const orderTrackingNumber = 34577666767;

const [order, setOrder] = useState({});
const [checked, setChecked] = useState(true);

useEffect(() => {


    if(checked){
        setBillingAddress(shippingAddress);
    }else{
        setBillingAddress({
            city: "",
            country: "",
            firstName: "",
            name: "",
            phoneNumber: "",
            postalCode: "",
            street: ""
        })
    }

},[checked])

function ShippingValidatorForm(){

    if(shippingAddress.city.length > 0 &&  shippingAddress.country.length  > 0 && shippingAddress.firstName.length  > 0 && shippingAddress.name.length  > 0 && shippingAddress.street.length  > 0 && shippingAddress.phoneNumber.length  > 0 && shippingAddress.postalCode.length  > 0){

        console.log("Tous les champs sont rempli");
        console.log(shippingAddress);
        setShippingFormValidator({
            city: true,
            country: true,
            firstName: true,
            name: true,
            phoneNumber: true,
            postalCode: true,
            street: true
        });

        
    }else {

        console.log("Il y a au moin un champs qui est pas rempli");
        console.log(shippingAddress);

        let isCityFieldValidate = true;
        let isCountryFieldValidate = true;
        let isFirstNameFieldValidate = true;
        let isStreetFieldValidate = true;
        let isPostalCodeFieldValidate = true;
        let isPhoneNumberFieldValidate = true;
        let isNameFieldValidate = true;
        
        if(shippingAddress.city.length == 0){
            console.log("1");
             isCityFieldValidate = false;
        }
        if(shippingAddress.country.length == 0){
            console.log("2");
             isCountryFieldValidate = false;
        }
        if(shippingAddress.firstName.length == 0){
            console.log("3");
             isFirstNameFieldValidate = false;
        }
        if(shippingAddress.street.length == 0){
            console.log("4");
             isStreetFieldValidate = false;
        }
        if(shippingAddress.postalCode.length == 0){
            console.log("5");
             isPostalCodeFieldValidate = false;
        }
        if(shippingAddress.phoneNumber.length == 0){
            console.log("6");
             isPhoneNumberFieldValidate = false;
        }
        if(shippingAddress.name.length == 0){
            console.log("7");
             isNameFieldValidate = false;
        }

        setShippingFormValidator({
            city: isCityFieldValidate == false ? false : true,
            coutry: isCountryFieldValidate == false ? false : true,
            firstName: isFirstNameFieldValidate == false ? false : true,
            name: isNameFieldValidate == false ? false : true,
            postalCode: isPostalCodeFieldValidate == false ? false : true,
            street: isStreetFieldValidate == false ? false : true,
            phoneNumber: isPhoneNumberFieldValidate == false ? false : true,
        });
    }

}
function BillingValidatorForm(){

    if(billingAddress.city.length > 0 &&  billingAddress.country.length  > 0 && billingAddress.firstName.length  > 0 && billingAddress.name.length  > 0 && billingAddress.street.length  > 0 && billingAddress.phoneNumber.length  > 0 && billingAddress.postalCode.length  > 0){

        console.log("Tous les champs du form billing sont rempli");
        console.log(billingAddress);
        setBillingFormValidator({
            city: true,
            country: true,
            firstName: true,
            name: true,
            phoneNumber: true,
            postalCode: true,
            street: true
        });

        
    }else {

        console.log("Il y a au moin un champs du billing form qui est pas rempli");
        console.log(billingAddress);

        let isCityFieldValidate = true;
        let isCountryFieldValidate = true;
        let isFirstNameFieldValidate = true;
        let isStreetFieldValidate = true;
        let isPostalCodeFieldValidate = true;
        let isPhoneNumberFieldValidate = true;
        let isNameFieldValidate = true;
        
        if(billingAddress.city.length == 0){
            console.log("1");
             isCityFieldValidate = false;
        }
        if(billingAddress.country.length == 0){
            console.log("2");
             isCountryFieldValidate = false;
        }
        if(billingAddress.firstName.length == 0){
            console.log("3");
             isFirstNameFieldValidate = false;
        }
        if(billingAddress.street.length == 0){
            console.log("4");
             isStreetFieldValidate = false;
        }
        if(billingAddress.postalCode.length == 0){
            console.log("5");
             isPostalCodeFieldValidate = false;
        }
        if(billingAddress.phoneNumber.length == 0){
            console.log("6");
             isPhoneNumberFieldValidate = false;
        }
        if(billingAddress.name.length == 0){
            console.log("7");
             isNameFieldValidate = false;
        }

        setBillingFormValidator({
            city: isCityFieldValidate == false ? false : true,
            coutry: isCountryFieldValidate == false ? false : true,
            firstName: isFirstNameFieldValidate == false ? false : true,
            name: isNameFieldValidate == false ? false : true,
            postalCode: isPostalCodeFieldValidate == false ? false : true,
            street: isStreetFieldValidate == false ? false : true,
            phoneNumber: isPhoneNumberFieldValidate == false ? false : true,
        });
    }

}

function ValidatorForms(e){
    e.preventDefault();
    BillingValidatorForm();
    ShippingValidatorForm();
}



  return (
    <div className='PaymentAndDeliverySection'> <CheckoutNavigation />
    <section>
        <div className="BlocLeft" >
            <div className='FacturationModeBloc'>
                {checked.toString()}
               <h3>Adresse de livraison</h3>
               <ShippingForm shippingFormValidator={shippingFormValidator} shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} billingAddress={billingAddress} setBillingAddress={setBillingAddress} />
               <h3>Adresse de facturation</h3>
               <div><input id="shippingAndDeliveryAdressAreIdentical" type="radio" checked={checked} onClick={() => setChecked(!checked)} /> <label htmlFor="shippingAndDeliveryAdressAreIdentical">L'adresse de facturation est l'adresse de livraison</label></div>

               {
                checked == false ? <BillingForm billingFormValidator={billingFormValidator} billingAddress={billingAddress} setBillingAddress={setBillingAddress} /> : ""
               }

               <div onClick={(e) => ValidatorForms(e)}>Passez au paiement</div>
               
            </div>
            <div className='DeliveryModeBloc'>
                <h3>PAIEMENT</h3>
                <div>
                    <div className='DeliveryModeBloc__deliveryMethod'>
                        <div>
                            <form className='CreditCardForm'>
                            <div>
                                <label htmlFor="">Numéro de carte</label>
                                <input type="text" />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="">Date d'expiration</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">CVC</label>
                                    <input type="text" />
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="BlocRight" >
            
        </div>
    </section>
    </div>
  )
}

export default PaymentAndDelivery