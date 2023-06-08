function ShippingValidatorForm(shippingAddress, setShippingFormValidator){

    if(shippingAddress.city.length > 0 &&  shippingAddress.country.length  > 0 && shippingAddress.firstName.length  > 0 && shippingAddress.name.length  > 0 && shippingAddress.street.length  > 0 && shippingAddress.phoneNumber.length  > 0 && shippingAddress.postalCode.length  > 0){

        // I enter here when all form's field are filled

        setShippingFormValidator({
            city: true,
            country: true,
            firstName: true,
            name: true,
            phoneNumber: true,
            postalCode: true,
            street: true
        });

        return "validate";

        
    }else {

        // I enter here when at least one form's field is not filled

        let isCityFieldValidate = true;
        let isCountryFieldValidate = true;
        let isFirstNameFieldValidate = true;
        let isStreetFieldValidate = true;
        let isPostalCodeFieldValidate = true;
        let isPhoneNumberFieldValidate = true;
        let isNameFieldValidate = true;
        
        if(shippingAddress.city.length == 0){
             isCityFieldValidate = false;
        }
        if(shippingAddress.country.length == 0){
             isCountryFieldValidate = false;
        }
        if(shippingAddress.firstName.length == 0){
             isFirstNameFieldValidate = false;
        }
        if(shippingAddress.street.length == 0){
             isStreetFieldValidate = false;
        }
        if(shippingAddress.postalCode.length == 0){
             isPostalCodeFieldValidate = false;
        }
        if(shippingAddress.phoneNumber.length == 0){
             isPhoneNumberFieldValidate = false;
        }
        if(shippingAddress.name.length == 0){
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

        return "not validate";
    }

}

export default ShippingValidatorForm;