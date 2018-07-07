import React from 'react';
import { Submit_Button } from './submit_button';
import { Bio_Para } from './bio_para'; 

export default class Bio_Form extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            first_name: "",
            first_name_valid: false,
            last_name: "",
            last_name_valid: false,
            gender_prefix: "",
            gender_prefix_valid: false
        }

        this.process_data = this.process_data.bind(this);
        this.get_first_name = this.get_first_name.bind(this);
        this.get_last_name = this.get_last_name.bind(this);
        this.get_gender_prefix = this.get_gender_prefix.bind(this);

    }

    process_data() {

        this.get_first_name();
        this.get_last_name();
        this.get_gender_prefix();

    }

    get_first_name() {

        const user_input_first_name = document.getElementById("FName").value.trim();
        
        if(user_input_first_name === ""){
            document.getElementById("FName_warn").style.visibility = "visible";
            this.setState((first_name_valid) => ({first_name_valid: false}));
        } else {
            document.getElementById("FName_warn").style.visibility = "hidden";
            this.setState((first_name_valid) => ({first_name_valid: true}));
            const caps_first_letter = user_input_first_name.substring(0,1).toUpperCase();
            const rest_of_name = user_input_first_name.substring(1).toLowerCase();

            this.setState((first_name) => ({first_name: caps_first_letter + rest_of_name}));
        
        }
        
    }

    get_last_name() {

        const user_input_last_name = document.getElementById("LName").value.trim();
        
        if(user_input_last_name === ""){
            document.getElementById("LName_warn").style.visibility = "visible";
            this.setState((last_name_valid) => ({last_name_valid: false}));
        } else {
            document.getElementById("LName_warn").style.visibility = "hidden";
            this.setState((last_name_valid) => ({last_name_valid: true}));
            const caps_first_letter = user_input_last_name.substring(0,1).toUpperCase();
            const rest_of_name = user_input_last_name.substring(1).toLowerCase();

            this.setState((last_name) => ({last_name: caps_first_letter + rest_of_name}));
        
        }
        
    }

    get_gender_prefix() {

        if(!(document.getElementById("male").checked) && 
        !(document.getElementById("female").checked) && 
        !(document.getElementById("other").checked)) {

            document.getElementById("gender_warn").style.visibility = "visible";
            this.setState((gender_prefix_valid) => ({gender_prefix_valid: false}));
        
        } else if(document.getElementById("male").checked) {
            
            this.setState((gender_prefix) => ({gender_prefix: "Mr"}));
            document.getElementById("gender_warn").style.visibility = "hidden";
            this.setState((gender_prefix_valid) => ({gender_prefix_valid: true}));

        } else if(document.getElementById("female").checked){
        
            this.setState((gender_prefix) => ({gender_prefix: "Mrs"}));
            document.getElementById("gender_warn").style.visibility = "hidden";
            this.setState((gender_prefix_valid) => ({gender_prefix_valid: true}));

        } else if(document.getElementById("other").checked){

            this.setState((gender_prefix) => ({gender_prefix: ""}));
            document.getElementById("gender_warn").style.visibility = "hidden";
            this.setState((gender_prefix_valid) => ({gender_prefix_valid: true}));

    }
    }

    render() {

        return (
            <div>

                <div className="inner_div">
                    <label>First Name: </label>
                    <input type="text" id="FName" /><span className="warning" id="FName_warn">*Enter your first name*</span>
                </div>

                <div className="inner_div">
                    <label>Last Name: </label>
                    <input type="text" id="LName" /><span className="warning" id="LName_warn">*Enter your last name*</span>
                </div>

                <div className="inner_div">
                    <label>Gender:</label>

                    <label>Male: </label>
                    <input type="radio" name="gender" id="male" />

                    <label>Female: </label>
                    <input type="radio" name="gender" id="female" />

                    <label>Other: </label>
                    <input type="radio" name="gender" id="other" />

                    <span class="warning" id="gender_warn">*Select your gender*</span>
                </div>

                <div>
                <Submit_Button onClick={this.process_data} />
                </div>

                <div  className="inner_div" id="para_div">
                    <Bio_Para first_name={this.state.first_name} first_name_valid={this.state.first_name_valid} 
                              last_name={this.state.last_name} last_name_valid={this.state.last_name_valid} 
                              gender_prefix={this.state.gender_prefix} gender_prefix_valid={this.state.gender_prefix_valid} />
                </div>
                
            </div>
        )
    }

}