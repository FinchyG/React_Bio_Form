import React from 'react';
import { Submit_Button } from './submit_button';
import { Bio_Para_One } from './bio_para_one';

export default class Bio_Form extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            first_name: "",
            first_name_valid: false,
            last_name: "",
            last_name_valid: false,
            gender_prefix: "",
            gender_prefix_valid: false,
            age: "",
            age_valid: false,
            fav_col: "",
            fav_col_valid: false,
            interests: "",
            interests_valid: false
        }

        this.process_data = this.process_data.bind(this);
        this.get_first_name = this.get_first_name.bind(this);
        this.get_last_name = this.get_last_name.bind(this);
        this.get_gender_prefix = this.get_gender_prefix.bind(this);
        this.get_age = this.get_age.bind(this);
        this.get_fav_col = this.get_fav_col.bind(this);
        this.get_interests = this.get_interests.bind(this);

    }

    process_data() {

        this.get_first_name();
        this.get_last_name();
        this.get_gender_prefix();
        this.get_age();
        this.get_fav_col();
        this.get_interests();

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

    get_age() {

        const age = document.getElementById("age").value;
        const age_num = parseInt(age);

        if((age_num === "") || (age_num <= 0) || (age_num >= 120) || (isNaN(age_num))) {

            document.getElementById("age_warn").style.visibility = "visible";
            this.setState((age_valid) => ({age_valid: false}));
        
        } else {

            document.getElementById("age_warn").style.visibility = "hidden";
            this.setState((age_valid) => ({age_valid: true}));
            this.setState((age) => ({age: age_num}));

        }

    }

    get_fav_col() {

        const fav_color = document.getElementById("fav_col").value;

        if(fav_color === "") {

            document.getElementById("fav_color_warn").style.visibility = "visible";
            this.setState((fav_col_valid) => ({fav_col_valid: false}));

        } else {

            document.getElementById("fav_color_warn").style.visibility = "hidden";
            this.setState((fav_col_valid) => ({fav_col_valid: true}));
            this.setState((fav_col) => ({fav_col: fav_color}));

        }
    }

    get_interests() {

        const interests_arr = [
            document.getElementById("sports"),
            document.getElementById("music"),
            document.getElementById("reading"),
            document.getElementById("gardening"),
            document.getElementById("cookery"),
            document.getElementById("D.I.Y")        
        ];
    
        let sel_interests_arr = [];
    
        for(let i=0; i < interests_arr.length; i++) {
    
            if(interests_arr[i].checked) {
                sel_interests_arr.push(interests_arr[i].value);
            }
    
        }
    
    
    
        if(sel_interests_arr.length === 0) {
    
            document.getElementById("interests_warn").style.visibility = "visible";
            this.setState((interests_valid) => ({interests_valid: false}));
    
        }
    
        let loop_interests_str = "";
        let interests_str = "";
    
        if(sel_interests_arr.length >= 3) {
    
            for(let i=0; i < sel_interests_arr.length - 2; i++) {
    
                loop_interests_str += sel_interests_arr[i] + ", ";
            
            }
    
            interests_str += loop_interests_str + sel_interests_arr[sel_interests_arr.length -2] + " and " + 
                             sel_interests_arr[sel_interests_arr.length -1];
            
            this.setState((interests_valid) => ({interests_valid: true}));
        
        }
    
        if(sel_interests_arr.length === 2) {
    
            interests_str += sel_interests_arr[sel_interests_arr.length -2] + " and " + 
                             sel_interests_arr[sel_interests_arr.length -1];
    
                             this.setState((interests_valid) => ({interests_valid: true}));
    
        }
    
        if(sel_interests_arr.length === 1) {
    
            interests_str += sel_interests_arr;
    
            this.setState((interests_valid) => ({interests_valid: true}));;
    
        }
    
        this.setState((interests) => ({interests: interests_str}));
        
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

                <div className="inner_div">
                    <label>Age: </label>
                    <input type="text" id="age" size="5"/>
                    <span className="warning" id="age_warn">*Enter your age in years with a number*</span>
                </div>

                <div className="inner_div">
                    <label>Favourite Colour: </label>
                    <select id="fav_col">
                        <option value="" selected disabled></option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>                
                    </select>
                    <span className="warning" id="fav_color_warn">*Select your favourite color*</span>
                </div>

                <div className="inner_div">
                    <label>Interests:</label>
                        <label>Sports: </label><input type="checkbox" id="sports" name="interests" value="sports" />
                        <label>Music: </label><input type="checkbox" id="music" name="interests" value="music" />
                        <label>Reading: </label><input type="checkbox" id="reading" name="interests" value="reading" />
                        <label>Gardening: </label><input type="checkbox" id="gardening" name="interests" value="gardening" />
                        <label>Cookery: </label><input type="checkbox" id="cookery" name="interests" value="cookery" />
                        <label>D.I.Y: </label><input type="checkbox" id="D.I.Y" name="interests" value="D.I.Y" />
                    <span className="warning" id="interests_warn">*Select at least one interest*</span>
                </div>

                <div>
                <Submit_Button onClick={this.process_data} />
                </div>

                <div  className="inner_div" id="para_div">
                    <Bio_Para_One first_name={this.state.first_name} first_name_valid={this.state.first_name_valid} 
                              last_name={this.state.last_name} last_name_valid={this.state.last_name_valid} 
                              gender_prefix={this.state.gender_prefix} gender_prefix_valid={this.state.gender_prefix_valid}
                              age={this.state.age} age_valid={this.state.age_valid} 
                              fav_col={this.state.fav_col} fav_col_valid={this.state.fav_col_valid} 
                              interests={this.state.interests} interests_valid={this.state.interests_valid} />
                </div>
                
            </div>
        )
    }

}