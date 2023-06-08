function BillingValidatorForm(billingAddress, setBillingFormValidator){

    if(billingAddress.city.length > 0 &&  billingAddress.country.length  > 0 && billingAddress.firstName.length  > 0 && billingAddress.name.length  > 0 && billingAddress.street.length  > 0 && billingAddress.phoneNumber.length  > 0 && billingAddress.postalCode.length  > 0){

        // I enter here when all fields are filled

        setBillingFormValidator({
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

        return "not validate";
    }

}

export default BillingValidatorForm