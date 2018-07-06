import React from 'react';

export const Bio_Para = (props) => {

    let show_bio_para = props.show_bio_para;

    console.log(show_bio_para);

    if(show_bio_para === "true") {

        return <p>My name is {props.first_name}.</p>;

    }

    return <p></p>;

}