import React from 'react';

export default class Bio_Form extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            first_name: "",
            first_name_valid: false,
        }

        this.process_data = this.process_data.bind(this);
        this.get_first_name = this.get_first_name.bind(this);

    }

    process_data() {

    }

    get_first_name() {

        const user_input_first_name = document.getElementById("FName").value.trim();
    
        if(user_input_first_name === ""){
            document.getElementById("FName_warn").style.visibility = "visible";
            bio_form.first_name_valid = false;
        } else {
            document.getElementById("FName_warn").style.visibility = "hidden";
            bio_form.first_name_valid = true;
            const caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
            const rest_of_name = user_input_first_name.substring(1).toLowerCase();
            
            bio_form.first_name = caps_first_letter + rest_of_name;
        }
        
    }

}