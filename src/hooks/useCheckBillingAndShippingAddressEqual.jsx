import React from 'react'
import { useState, useEffect } from 'react';

const useCheckBillingAndShippingAddressEqual = (setBillingAddress, shippingAddress) => {
    const [areBillingAndShippingAddressEqual, setAreBillingAndShippingAddressEqual] = useState(true);

    useEffect(() => {
    
        if(areBillingAndShippingAddressEqual){
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
    
    },[areBillingAndShippingAddressEqual])

    return [areBillingAndShippingAddressEqual, setAreBillingAndShippingAddressEqual];
}

export default useCheckBillingAndShippingAddressEqual