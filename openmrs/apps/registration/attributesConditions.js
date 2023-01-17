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
