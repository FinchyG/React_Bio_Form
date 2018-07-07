import React from 'react';
import { Submit_Button } from './submit_button';
import { Bio_Para } from './bio_para'; 

export default class Bio_Form extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            first_name: "",
            first_name_valid: "false",
        }

        this.process_data = this.process_data.bind(this);
        this.get_first_name = this.get_first_name.bind(this);

    }

    process_data() {

        this.get_first_name();

    }

    get_first_name() {

        const user_input_first_name = document.getElementById("FName").value.trim();
        let first_name_valid = this.state.first_name_valid;
    
        if(user_input_first_name === ""){
            document.getElementById("FName_warn").style.visibility = "visible";
            first_name_valid = "false";
            this.setState((first_name_valid) => ({first_name_valid: first_name_valid}));
        } else {
            document.getElementById("FName_warn").style.visibility = "hidden";
            first_name_valid = "true";
            this.setState((first_name_valid) => ({first_name_valid: "true"}));
            const caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
            const rest_of_name = user_input_first_name.substring(1).toLowerCase();

            console.log(first_name_valid);
            
            this.setState((first_name) => ({first_name: caps_first_letter + rest_of_name}));
        }
        
    }

    render() {

        return (
            <div>

                <div className="inner_div">
                    <label>First Name: </label>
                    <input type="text" id="FName" /><span className="warning" id="FName_warn">*Enter your first name*</span>
                </div>

                <div>
                <Submit_Button onClick={this.process_data} />
                </div>

                <div  className="inner_div" id="para_div">
                    <Bio_Para first_name={this.state.first_name} first_name_valid={this.state.first_name_valid} />
                </div>
                
            </div>
        )
    }

}