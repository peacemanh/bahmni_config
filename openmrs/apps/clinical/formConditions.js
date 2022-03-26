Bahmni.ConceptSet.FormConditions.rules = {
    'Trauma (set)' : function (formName, formFieldValues) {        
        var mod = formFieldValues['Trauma (set)'];
        if(mod){
            return{
                show: ["Trauma category if yes"]
            }
        } else{
            return{
                hide: ["Trauma category if yes"]
            }
        }
    },
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    }
};