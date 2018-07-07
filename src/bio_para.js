import React from 'react';

export const Bio_Para = (props) => {

    
    if((props.first_name_valid === true) && (props.last_name_valid === true))  {

        return <p>My name is {props.first_name} {props.last_name}.</p>;

    }

    return <p></p>;

}