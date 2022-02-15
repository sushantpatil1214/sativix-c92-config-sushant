Bahmni.ConceptSet.FormConditions.rules = {
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


    'Normal nutrition': function(formName, formFieldValues) {
		var conditions = {show: [], hide: []};
		var value = formFieldValues['Normal nutrition'];
		if (value === "No full name" || value === "No") {
			conditions.show.push("Acute malnutrition (Moderate if P / T between - 2 and - 3 SD, Severe if <- 3 SD)")
			conditions.show.push("Chronic malnutrition (Moderate if T / A between - 2 and - 3 SD, Severe if <- 3 SD)")
		} else {
			conditions.hide.push("Acute malnutrition (Moderate if P / T between - 2 and - 3 SD, Severe if <- 3 SD)")
			conditions.hide.push("Chronic malnutrition (Moderate if T / A between - 2 and - 3 SD, Severe if <- 3 SD)")
		}
		return conditions;
	},

    /*
     * Handling conditions for General Dental Examination form(Pedodontic)
     */
    'General Dental Examination_Select Dentition': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Select Dentition'];

        if (value === 'General Dental Examination_Select Dentition_Primary') {
            conditions.show.push ("General Dental Examination_Caries Section I");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Caries Section II");
            conditions.show.push ("General Dental Examination_Pockets Section I");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets Section II");
            conditions.show.push ("General Dental Examination_Mobility Section I");
            conditions.hide.push ("General Dental Examination_Mobility Section II");
            conditions.show.push ("General Dental Examination_Fracture Section I");
            conditions.hide.push ("General Dental Examination_Fracture Section II");
            conditions.show.push ("General Dental Examination_Missing teeth Section I");
            conditions.hide.push ("General Dental Examination_Missing teeth Section II");
            conditions.show.push ("General Dental Examination_Dry Socket Section I");
            conditions.hide.push ("General Dental Examination_Dry Socket Section II");
      } else if (value === 'General Dental Examination_Select Dentition_Mixed'){
            conditions.show.push ("General Dental Examination_Caries Section II");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Pockets Section I");
            conditions.hide.push ("General Dental Examination_Caries Section I");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");
            conditions.show.push ("General Dental Examination_Pockets Section II");
            conditions.hide.push ("General Dental Examination_Mobility Section I");
            conditions.show.push ("General Dental Examination_Mobility Section II");
            conditions.hide.push ("General Dental Examination_Fracture Section I");
            conditions.show.push ("General Dental Examination_Fracture Section II");
            conditions.hide.push ("General Dental Examination_Missing teeth Section I");
            conditions.show.push ("General Dental Examination_Missing teeth Section II");
            conditions.hide.push ("General Dental Examination_Dry Socket Section I");
            conditions.show.push ("General Dental Examination_Dry Socket Section II");                 
        } else {
            conditions.hide.push ("General Dental Examination_Caries Section I");
            conditions.hide.push ("General Dental Examination_Caries Section II");
            conditions.hide.push ("General Dental Examination_Pockets Section I");
            conditions.hide.push ("General Dental Examination_Pockets Section II");
            conditions.hide.push ("General Dental Examination_Mobility Section I");
            conditions.hide.push ("General Dental Examination_Mobility Section II");
            conditions.hide.push ("General Dental Examination_Fracture Section I");
            conditions.hide.push ("General Dental Examination_Fracture Section II");
            conditions.hide.push ("General Dental Examination_Missing teeth Section I");
            conditions.hide.push ("General Dental Examination_Missing teeth Section II");
            conditions.hide.push ("General Dental Examination_Dry Socket Section I");
            conditions.hide.push ("General Dental Examination_Dry Socket Section II");     
        }
        return conditions;     
    },

    'General Dental Examination_Caries_Select Quadrant_5to8': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select Quadrant_5to8'];
        if (value === 'General Dental Examination_Select Quadrant_5th quadrant') {
            conditions.show.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");        
        }
         else if  (value === 'General Dental Examination_Select Quadrant_6th quadrant'){
            conditions.show.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");     
        } 
        else if (value === 'General Dental Examination_Select Quadrant_7th quadrant'){
            conditions.show.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");          
        } 
        else if (value === 'General Dental Examination_Select Quadrant_8th quadrant'){
            conditions.show.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");         
        }else {
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (7th quadrant)");           
        }
        return conditions;     
    },

    'General Dental Examination_Caries_Select Quadrant_1to4': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select Quadrant_1to4'];   
        if (value === 'General Dental Examination_Select Quadrant_1st quadrant') {
            conditions.show.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
        }
         else if  (value === 'General Dental Examination_Select Quadrant_2nd quadrant'){
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.show.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_3rd quadrant'){
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.show.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_4th quadrant'){
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.show.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
        }else {
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Caries_Select tooth (4th quadrant)");
        }
        return conditions;      
    },

    'General Dental Examination_Pockets_Select Quadrant_5to8': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Pockets_Select Quadrant_5to8'];
        if (value === 'General Dental Examination_Select Quadrant_5th quadrant') {
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");        
        }
         else if  (value === 'General Dental Examination_Select Quadrant_6th quadrant'){
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");        
        } 
        else if (value === 'General Dental Examination_Select Quadrant_7th quadrant'){
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");         
        } 
        else if (value === 'General Dental Examination_Select Quadrant_8th quadrant'){
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");          
        }else {
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (8th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (5th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (6th quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (7th quadrant)");         
        }
        return conditions;  
    },

    'General Dental Examination_Pockets_Select Quadrant_1to4': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Pockets_Select Quadrant_1to4'];  
        if (value === 'General Dental Examination_Select Quadrant_1st quadrant') {
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");
        }
         else if  (value === 'General Dental Examination_Select Quadrant_2nd quadrant'){
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_3rd quadrant'){
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_4th quadrant'){
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.show.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");
        }else {
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination_Pockets_Select tooth (4th quadrant)");         
        }
        return conditions;  
    },

    'General Dental Examination_Caries_Select tooth (1st quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (1st quadrant)'];      
        if  (value === "General Dental Examination_Select tooth (1st quadrant)_11" || value === "General Dental Examination_Select tooth (1st quadrant)_12" || value === "General Dental Examination_Select tooth (1st quadrant)_13") {
            conditions.show.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");      
        } 
        else if (value === "General Dental Examination_Select tooth (1st quadrant)_14" || value === "General Dental Examination_Select tooth (1st quadrant)_15" || 
                 value === "General Dental Examination_Select tooth (1st quadrant)_16" || value === "General Dental Examination_Select tooth (1st quadrant)_17" ||
                 value === "General Dental Examination_Select tooth (1st quadrant)_53" || value === "General Dental Examination_Select tooth (1st quadrant)_54" || 
                 value === "General Dental Examination_Select tooth (1st quadrant)_55"){
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        return conditions;   
    },

    'General Dental Examination_Caries_Select tooth (2nd quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (2nd quadrant)'];   
        if (value === "General Dental Examination_Select tooth (2nd quadrant)_21" || value === "General Dental Examination_Select tooth (2nd quadrant)_22" || value === "General Dental Examination_Select tooth (2nd quadrant)_23") {
            conditions.show.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        else if  (value === "General Dental Examination_Select tooth (2nd quadrant)_24" || value === "General Dental Examination_Select tooth (2nd quadrant)_25" || 
                    value === "General Dental Examination_Select tooth (2nd quadrant)_26" || value === "General Dental Examination_Select tooth (2nd quadrant)_27" ||
                    value === "General Dental Examination_Select tooth (2nd quadrant)_63" || value === "General Dental Examination_Select tooth (2nd quadrant)_64" ||
                    value === "General Dental Examination_Select tooth (2nd quadrant)_65"){
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");       
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        return conditions;
    },

    'General Dental Examination_Caries_Select tooth (3rd quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (3rd quadrant)'];
        
        if (value === "General Dental Examination_Select tooth (3rd quadrant)_31" || value === "General Dental Examination_Select tooth (3rd quadrant)_32" || value === "General Dental Examination_Select tooth (3rd quadrant)_33") {
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        } 
        else if (value === "General Dental Examination_Select tooth (3rd quadrant)_34" || value === "General Dental Examination_Select tooth (3rd quadrant)_35" ||
                   value === "General Dental Examination_Select tooth (3rd quadrant)_36" || value === "General Dental Examination_Select tooth (3rd quadrant)_37" ||
                   value === "General Dental Examination_Select tooth (3rd quadrant)_73" || value === "General Dental Examination_Select tooth (3rd quadrant)_74" ||
                   value === "General Dental Examination_Select tooth (3rd quadrant)_75"){
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        return conditions;
    },

   'General Dental Examination_Caries_Select tooth (4th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (4th quadrant)'];   
        if (value === "General Dental Examination_Select tooth (4th quadrant)_41" || value === "General Dental Examination_Select tooth (4th quadrant)_42" || value === "General Dental Examination_Select tooth (4th quadrant)_43") {
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");    
        }
        else if (value === "General Dental Examination_Select tooth (4th quadrant)_44" || value === "General Dental Examination_Select tooth (4th quadrant)_45" || 
                    value === "General Dental Examination_Select tooth (4th quadrant)_46" || value === "General Dental Examination_Select tooth (4th quadrant)_47" ||
                    value === "General Dental Examination_Select tooth (4th quadrant)_83" || value === "General Dental Examination_Select tooth (4th quadrant)_84" ||
                    value === "General Dental Examination_Select tooth (4th quadrant)_85"){
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface I (Lower Posterior teeth)");
        }
        return conditions;
    },
     
    'General Dental Examination_Caries_Select tooth (5th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (5th quadrant)'];   
        if (value === "General Dental Examination_Select tooth (5th quadrant)_51" || value === "General Dental Examination_Select tooth (5th quadrant)_52" || value === "General Dental Examination_Select tooth (5th quadrant)_53") {
            conditions.show.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");    
        } 
        else if (value === "General Dental Examination_Select tooth (5th quadrant)_54" || value === "General Dental Examination_Select tooth (5th quadrant)_55"){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;  
    },

    'General Dental Examination_Caries_Select tooth (6th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (6th quadrant)'];
        if (value === "General Dental Examination_Select tooth (6th quadrant)_61" || value === "General Dental Examination_Select tooth (6th quadrant)_62" || value === "General Dental Examination_Select tooth (6th quadrant)_63") {
            conditions.show.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");    
        } 
        else if (value === "General Dental Examination_Select tooth (6th quadrant)_64" || value === "General Dental Examination_Select tooth (6th quadrant)_65"){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;     
    },

    'General Dental Examination_Caries_Select tooth (7th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (7th quadrant)'];
       
        if (value === "General Dental Examination_Select tooth (7th quadrant)_71" || value === "General Dental Examination_Select tooth (7th quadrant)_72" || value === "General Dental Examination_Select tooth (7th quadrant)_73") {
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");   
        } 
        else if  (value === "General Dental Examination_Select tooth (7th quadrant)_74" || value === "General Dental Examination_Select tooth (7th quadrant)_75"){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions; 
    }, 

    'General Dental Examination_Caries_Select tooth (8th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination_Caries_Select tooth (8th quadrant)'];  
        if (value === "General Dental Examination_Select tooth (8th quadrant)_81" || value === "General Dental Examination_Select tooth (8th quadrant)_82" || value === "General Dental Examination_Select tooth (8th quadrant)_83") {
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)"); 
        } 
        else if (value === "General Dental Examination_Select tooth (8th quadrant)_84" || value === "General Dental Examination_Select tooth (8th quadrant)_85"){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");  
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;      
    },

    /**
     * Handling conditions for General Dental Examination form(Adult)
     */

    'General Dental Examination(Adult)_Caries_Select Quadrant_1to4': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Caries_Select Quadrant_1to4'];  
        if (value === 'General Dental Examination_Select Quadrant_1st quadrant') {
            conditions.show.push ("General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)");
        }
        else if  (value === 'General Dental Examination_Select Quadrant_2nd quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_3rd quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_4th quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)");
        }else {
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)");
        }
        return conditions;  
    },

    'General Dental Examination(Adult)_Pockets_Select Quadrant_1to4': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Pockets_Select Quadrant_1to4'];    
        if (value === 'General Dental Examination_Select Quadrant_1st quadrant') {
            conditions.show.push ("General Dental Examination(Adult)_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (4th quadrant)");
        }
         else if  (value === 'General Dental Examination_Select Quadrant_2nd quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (1st quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_3rd quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (2nd quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (4th quadrant)");
        } 
        else if  (value === 'General Dental Examination_Select Quadrant_4th quadrant'){
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (3rd quadrant)");
            conditions.show.push ("General Dental Examination(Adult)_Pockets_Select tooth (4th quadrant)");
        }else {
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (1st quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (2nd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (3rd quadrant)");
            conditions.hide.push ("General Dental Examination(Adult)_Pockets_Select tooth (4th quadrant)");
        }
        return conditions;  
    },

    'General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Caries_Select tooth (1st quadrant)'];

        if (value === "General Dental Examination_Select tooth (1st quadrant)_11" || value === "General Dental Examination_Select tooth (1st quadrant)_12" || value === "General Dental Examination_Select tooth (1st quadrant)_13") {
            conditions.show.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");    
        }
        else if (value === "General Dental Examination_Select tooth (1st quadrant)_14" || value === "General Dental Examination_Select tooth (1st quadrant)_15" ||
                   value === "General Dental Examination_Select tooth (1st quadrant)_16" || value === "General Dental Examination_Select tooth (1st quadrant)_17" || value === "General Dental Examination_Select tooth (1st quadrant)_18" ){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");        
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;    
    },

    'General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Caries_Select tooth (2nd quadrant)'];

        if (value === "General Dental Examination_Select tooth (2nd quadrant)_21" || value === "General Dental Examination_Select tooth (2nd quadrant)_22" || value === "General Dental Examination_Select tooth (2nd quadrant)_23") {
            conditions.show.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else if (value === "General Dental Examination_Select tooth (2nd quadrant)_24" || value === "General Dental Examination_Select tooth (2nd quadrant)_25" ||
                   value === "General Dental Examination_Select tooth (2nd quadrant)_26" || value === "General Dental Examination_Select tooth (2nd quadrant)_27" || value === "General Dental Examination_Select tooth (2nd quadrant)_28" ){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;  
    },

    'General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Caries_Select tooth (3rd quadrant)'];    
        if (value === "General Dental Examination_Select tooth (3rd quadrant)_31" || value === "General Dental Examination_Select tooth (3rd quadrant)_32" || value === "General Dental Examination_Select tooth (3rd quadrant)_33") {
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");    
        } 
        else if (value === "General Dental Examination_Select tooth (3rd quadrant)_34" || value === "General Dental Examination_Select tooth (3rd quadrant)_35" ||
                   value === "General Dental Examination_Select tooth (3rd quadrant)_36" || value === "General Dental Examination_Select tooth (3rd quadrant)_37" || value === "General Dental Examination_Select tooth (3rd quadrant)_38" ){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;
    },

    'General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)': function (formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var value  = formFieldValues['General Dental Examination(Adult)_Caries_Select tooth (4th quadrant)'];   
        if (value === "General Dental Examination_Select tooth (4th quadrant)_41" || value === "General Dental Examination_Select tooth (4th quadrant)_42" || value === "General Dental Examination_Select tooth (4th quadrant)_43") {
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");  
        } 
        else if (value === "General Dental Examination_Select tooth (4th quadrant)_44" || value === "General Dental Examination_Select tooth (4th quadrant)_45" ||
                   value === "General Dental Examination_Select tooth (4th quadrant)_46" || value === "General Dental Examination_Select tooth (4th quadrant)_47" || value === "General Dental Examination_Select tooth (4th quadrant)_48" ){
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.show.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        else{
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Anterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Upper Posterior teeth)");
            conditions.hide.push ("General Dental Examination_Select Surface (Lower Posterior teeth)");
        }
        return conditions;
    }
};