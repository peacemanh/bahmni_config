var maritalStatus= function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
        if (patient["age"].years >= 10) {
        returnValues.show.push("education", "occupation", "maritalStatus")
    }else if ((patient["age"].years < 10) && (patient["age"].years >= 4)) {
        returnValues.hide.push("maritalStatus")
        returnValues.show.push("education", "occupation")
    } else if (patient["age"].years < 4) {
        returnValues.hide.push("maritalStatus", "education", "occupation")
    } else {
        returnValues.hide.push("maritalStatus", "education", "occupation")
    }
    return returnValues
};
Bahmni.Registration.AttributesConditions.rules = {
    'PaymentMethod': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Insurance"){
            returnValues.show.push("insuranceInformation");
            returnValues.hide.push("creditInformation", "CBHIInformation");
           
        }
        else if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Credit"){
            returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation", "CBHIInformation");
           
        }
        else if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "CBHI"){
            returnValues.show.push("CBHIInformation");
            returnValues.hide.push("insuranceInformation", "creditInformation");
           
        }

        else {
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
            returnValues.hide.push("CBHIInformation");
        }
        return returnValues;
    }
};
