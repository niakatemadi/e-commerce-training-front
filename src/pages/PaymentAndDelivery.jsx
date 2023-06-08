import React, { useEffect } from 'react';
import CheckoutNavigation from '../components/ui/CheckoutNavigation';
import "../styles/pages/PaymentAndDelivery.scss";
import ShippingForm from '../components/form/ShippingForm';
import BillingForm from '../components/form/BillingForm';
import ShippingValidatorForm from '../utils/functions/ShippingValidatorForm';
import BillingValidatorForm from '../utils/functions/BillingValidatorForm';
import { useState } from 'react';
import useCheckBillingAndShippingAddressEqual from '../hooks/useCheckBillingAndShippingAddressEqual';

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

const [isFinalFormStep, setIsFinalFormStep] = useState(false);

const [paymentMode, setPaymentMode] = useState({});

const [creditCardDetails, setCreditCardDetails] = useState({});

const shopCartAmount = 500;
const orderTrackingNumber = 34577666767;

const [order, setOrder] = useState({});
const [areBillingAndShippingAddressEqual, setAreBillingAndShippingAddressEqual] = useCheckBillingAndShippingAddressEqual(setBillingAddress, shippingAddress);

function ValidatorForms(e){
    e.preventDefault();
   const billingFormStatus = BillingValidatorForm(billingAddress, setBillingFormValidator);
   const shippingFormStatus = ShippingValidatorForm(shippingAddress, setShippingFormValidator);

   console.log("billingFormStatus");
   console.log(billingFormStatus);
   console.log("shippingFormStatus");
   console.log(shippingFormStatus);

   if( shippingFormStatus === "validate" && billingFormStatus === "validate"){
    setIsFinalFormStep(true);
   }
}

  return (
    <div className='PaymentAndDeliverySection'> <CheckoutNavigation />
    <section>
        <div className="BlocLeft" >
            <div className={isFinalFormStep ? "FacturationModeBloc inactiveDiv" : "FacturationModeBloc"}>
                {areBillingAndShippingAddressEqual.toString()}
               <h3>Adresse de livraison</h3>
               <ShippingForm shippingFormValidator={shippingFormValidator} shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} billingAddress={billingAddress} setBillingAddress={setBillingAddress} />
               <h3>Adresse de facturation</h3>
               <div><input id="shippingAndDeliveryAdressAreIdentical" type="radio" checked={areBillingAndShippingAddressEqual} onClick={() => setAreBillingAndShippingAddressEqual(!areBillingAndShippingAddressEqual)} /> <label htmlFor="shippingAndDeliveryAdressAreIdentical">L'adresse de facturation est l'adresse de livraison</label></div>

               {
                areBillingAndShippingAddressEqual == false ? <BillingForm billingFormValidator={billingFormValidator} billingAddress={billingAddress} setBillingAddress={setBillingAddress} /> : ""
               }

               <div onClick={(e) => ValidatorForms(e)}>Passez au paiement</div>
               
            </div>
            <div className={isFinalFormStep ? "DeliveryModeBloc" : "DeliveryModeBloc inactiveDiv"}>
                <h3>PAIEMENT</h3>
                <p onClick={() => setIsFinalFormStep(false)}>Retour</p>
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