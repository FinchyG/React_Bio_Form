import React from 'react';
import { Title } from './title';
import Bio_Form_Container from './bio_form_container';

export default class Bio_Form extends React.Component {
    
    render() {

        return (
            <div id="form">
                <Title />
                <Bio_Form_Container />
            </div>

        )
    }
}