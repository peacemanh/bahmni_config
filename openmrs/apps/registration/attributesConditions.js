Bahmni.Registration.AttributesConditions.rules = {
    'PaymentMethod': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Insurance"){
            returnValues.show.push("insuranceInformation");
            returnValues.hide.push("creditInformation");
           
        }
        else if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Credit"){
            returnValues.show.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
           
        }
        else {
            returnValues.hide.push("creditInformation");
            returnValues.hide.push("insuranceInformation");
        }
        return returnValues;
    }
};
