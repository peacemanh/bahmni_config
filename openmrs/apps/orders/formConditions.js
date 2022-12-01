Bahmni.ConceptSet.FormConditions.rules = {
    'Confirm Notes' : function (formName, formFieldValues) {
        var confNotes = formFieldValues['Confirm Notes'];
        if (confNotes) {
            return {
                hide: ["Radiology Notes Suggestion",'Confirm Notes'],
                show: ["Radiology Notes Suggestion"]
            }
        }
    },
    'Summary' : function (formName, formFieldValues, patient) {
            var confNotes = formFieldValues['Radiology Notes Suggestion'];
            var ans = _.filter(patient.docpriv, function(priv){
                return true//priv.name == 'Write Radiology note'
            })
            
            if(ans.length==0){
                return {
                    hide: ["Radiology Notes", "Confirm Notes"]
                }
            }
            else if(!confNotes){
                return {
                    hide: ["Radiology Notes Suggestion", "Confirm Notes"]
                }
            }
    }
};