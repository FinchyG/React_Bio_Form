import React from 'react';

export const Bio_Para_One = (props) => {

    
    if((props.first_name_valid === true) && (props.last_name_valid === true) && (props.gender_prefix_valid === true) &&
        (props.age_valid === true))  {

        return <p>My name is {props.gender_prefix} {props.first_name} {props.last_name}, and I am {props.age} years old.</p>;

    }

    return <p></p>;

}