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
    },
   'Anti Natal Care' : function (formName, formFieldValues, patient) {
    var patientGender = patient['gender'];
    var patientAge = patient['age'];

    if (patientGender == 'F' && patientAge > 10 ) {
        return {
            enable: ["ANC_HIV", "ANC, Syphilis", "ANC, Gravida", "ANC, Blood Transfusion Quantity", "ANC, Parity", "Last Menstrual Period", "ANC, Expected Delivery Date", "ANC, First TD Date", "ANC, Second TD Date", "ANC, Third TD Date", "ANC, Blood Transfusion Provided", "ANC, Blood Transfusion Date"]
        }
    } else {
        return {
            disable: ["ANC_HIV", "ANC, Syphilis", "ANC, Gravida", "ANC, Blood Transfusion Quantity", "ANC, Parity", "Last Menstrual Period", "ANC, Expected Delivery Date", "ANC, First TD Date", "ANC, Second TD Date", "ANC, Third TD Date", "ANC, Blood Transfusion Provided", "ANC, Blood Transfusion Date"],
           error: "This form is only for women whose age is more than 10 years"
        }
    }
},
   'Do' : function (formName, formFieldValues) {
        var cytology = formFieldValues['Do'];
        if (cytology == 'GC-GYN Cytology') {
            return {
                show: ["OB-GYN Cytology"],
				hide: ["OB-Biopsy", "OB-Fine Needle Aspiration Cytology", "OB-Body Fluid Cytology", "OB-Bone Marrow Aspiration Cytology"]
            }
        } else if (cytology == 'SP-Surgicalpathology'){
            return {
                show: ["OB-Biopsy"],
				hide: ["OB-GYN Cytology", "OB-Fine Needle Aspiration Cytology", "OB-Body Fluid Cytology", "OB-Bone Marrow Aspiration Cytology"]
            }
        } else if (cytology == 'NG-Non-GYN Cytology'){
            return {
                show: ["OB-Fine Needle Aspiration Cytology", "How NG Specimen was obtained", "Pathologist/Technician perform"],
				hide: ["OB-GYN Cytology", "OB-Biopsy", "OB-Body Fluid Cytology", "OB-Bone Marrow Aspiration Cytology"]
            }
        } else if (cytology == 'BF-Non-GYN Cytology'){
            return {
                show: ["OB-Body Fluid Cytology", "How BF Specimen was obtained", "Pathologist/Technician perform"],
				hide: ["OB-GYN Cytology", "OB-Fine Needle Aspiration Cytology", "OB-Biopsy", "OB-Bone Marrow Aspiration Cytology"]
            }
        } else if (cytology == 'HP-Hematopathology'){
            return {
                show: ["OB-Bone Marrow Aspiration Cytology", "How HP Specimen was obtained", "Pathologist/Technician perform"],
				hide: ["OB-GYN Cytology", "OB-Fine Needle Aspiration Cytology", "OB-Body Fluid Cytology", "OB-Biopsy"]
            }
        } else{
            return {
				hide: ["OB-GYN Cytology", "OB-Fine Needle Aspiration Cytology", "OB-Body Fluid Cytology", "OB-Biopsy", "OB-Bone Marrow Aspiration Cytology", "Pathologist/Technician perform"]           }
        }
    },
    'Pathologist/Technician perform' : function (formName, formFieldValues) {
        var perform = formFieldValues['Pathologist/Technician perform'];
        if (!perform) {
            return {
                hide: ["Procedure Date", "who performs a procedure", "Procedures Performed"]
            }
        } else {
            return {
                show: ["Procedure Date", "who performs a procedure", "Procedures Performed"]
            }
        }
    },	
    'How NG Specimen was obtained' : function (formName, formFieldValues) {
        var perform = formFieldValues['How NG Specimen was obtained'];
        if (!perform) {
            return {
                hide: ["NG Specimen Source", "NG Specimen Source Free Text"]
            }
        } else {
            return {
                show: ["NG Specimen Source"],
                enable: ["NG Specimen Source Free Text"]
				
            }
        }
    },
    'NG Specimen Source' : function (formName, formFieldValues) {
        var perform = formFieldValues['NG Specimen Source'];
        if (!perform) {
            return {
                hide: ["NG Source Laterality"]
            }
        } else {
            return {
                show: ["NG Source Laterality"],
                disable: ["NG Specimen Source Free Text"]

            }
        }
    },
    'NG Source Laterality' : function (formName, formFieldValues) {
        var perform = formFieldValues['NG Source Laterality'];
        if (!perform) {
            return {
                hide: ["NG Specimen Source Detail"]
            }
        } else {
            return {
                show: ["NG Specimen Source Detail"]
            }
        }
    },
    'How HP Specimen was obtained' : function (formName, formFieldValues) {
        var perform = formFieldValues['How HP Specimen was obtained'];
        if (!perform) {
            return {
                hide: ["HP Specimen Source", "HP Specimen Source Free Text"]
            }
        } else {
            return {
                show: ["HP Specimen Source"],
                enable: ["HP Specimen Source Free Text"]
            }
        }
    },
    'HP Specimen Source' : function (formName, formFieldValues) {
        var perform = formFieldValues['HP Specimen Source'];
        if (!perform) {
            return {
                hide: ["HP Source Laterality"],
            }
        } else {
            return {
                show: ["HP Source Laterality"],
				disable: ["HP Specimen Source Free Text"]
            }
        }
    },
    'HP Source Laterality' : function (formName, formFieldValues) {
        var perform = formFieldValues['HP Source Laterality'];
        if (!perform) {
            return {
                hide: ["HP Specimen Source Detail"]
            }
        } else {
            return {
                show: ["HP Specimen Source Detail"]
            }
        }
    },
    'How BF Specimen was obtained' : function (formName, formFieldValues) {
        var perform = formFieldValues['How BF Specimen was obtained'];
        if (!perform) {
            return {
                hide: ["BF Specimen Source", "BF Specimen Source Free Text"]
            }
        } else {
            return {
                show: ["BF Specimen Source"],
                enable: ["BF Specimen Source Free Text"]
            }
        }
    },
    'BF Specimen Source' : function (formName, formFieldValues) {
        var perform = formFieldValues['BF Specimen Source'];
        if (!perform) {
            return {
                hide: ["BF Source Laterality"]
            }
        } else {
            return {
                show: ["BF Source Laterality"],
				disable: ["BF Specimen Source Free Text"]
            }
        }
    },
    'Select Ophthalmology Form' : function (formName, formFieldValues) {
        var selectForm = formFieldValues['Select Ophthalmology Form'];
        if (selectForm == 'OphthalmicVitals') {
            return {
                show: ["Ophthalmic Vitals"],
		hide: ["Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            }
        } else if (selectForm == 'OphthalmicHistory') {
            return {
                show: ["Ophthalmic History"],
		hide: ["Ophthalmic Vitals", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'PreliminaryEyeExamination') {
            return {
                show: ["Preliminary Eye examination"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'RefractionForm') {
            return {
                show: ["Refraction Form"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'BinocularVisionAndVisionTherapy') {
            return {
                show: ["Binocular vision and vision therapy patient examination"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'LowVisionAssessment') {
            return {
                show: ["Low Vision Assessment"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            }
           } else if (selectForm == 'ContactLensTrial') {
            return {
                show: ["Contact lens trial"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'FittingAssessment (Corneal RGP contact lens)') {
            return {
                show: ["Fitting assessment (Corneal RGP contact lens)"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            }
           } else if (selectForm == 'FittingAssessment (SSCL, SP/CCL STCL)') {
            return {
                show: ["Fitting assessment (SSCL, SP/CCL STCL)"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'FittingAssessment (Scleral contact lens)') {
            return {
                show: ["Fitting assessment (Scleral contact lens)"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Contact Lens Fitting"]
            } 
           } else if (selectForm == 'ContactLensFitting') {
            return {
                show: ["Contact Lens Fitting"],
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)"]
            } 
           } else {
                 return {
		hide: ["Ophthalmic Vitals", "Ophthalmic History", "Preliminary Eye examination", "Refraction Form", "Binocular vision and vision therapy patient examination", "Low Vision Assessment", "Contact lens trial", "Fitting assessment (Corneal RGP contact lens)", "Fitting assessment (SSCL, SP/CCL STCL)", "Fitting assessment (Scleral contact lens)", "Contact Lens Fitting"]
              }
           }
    }
};