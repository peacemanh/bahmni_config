Bahmni.Registration.AttributesConditions.rules = {
    'PaymentMethod': function(patient) {
        var returnValues = {
            show: [],
            hide: []
        };
        if(patient["PaymentMethod"] && patient["PaymentMethod"].value && patient["PaymentMethod"].value == "Insurance"){
            returnValues.show.push("insuranceInformation");
           
        }
        else {
            returnValues.hide.push("insuranceInformation");
        }
        return returnValues;
    }
};
