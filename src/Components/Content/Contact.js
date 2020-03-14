import React from 'react';

import Title from '../Title';

function Contact() {

    
    const h3Style = {
        padding: '100px 0 0',
        textAlign: 'center',
        color: 'black'
    }

    const pStyle = {
        textAlign: 'center'
    }

    return (
        <>
            <Title>Contact</Title>
            <h3 style={h3Style}>Email us at:</h3>
            <p style={pStyle}>Gabdesigns@yahoo.com</p>
        </>
    )
}

export default Contact;