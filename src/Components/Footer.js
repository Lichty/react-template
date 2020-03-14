import React from 'react';

import {Link} from 'react-router-dom';


function Footer() {

    const h3Style = {
        padding: '25px 0 0',
        textAlign: 'center',
        color: 'black'
    }

    const pStyle = {
        textAlign: 'center'
    }

    const linkStyle = {
        textDecoration: 'none'
    }

    const footerStyle = {
        padding: '75px',
        height: '150px'
    }


    return (      
        <footer style={footerStyle}>
            
            <Link style={linkStyle} to='contact'><h3 style={h3Style}>Contact us</h3></Link>
            <p style={pStyle}>Gabdesigns@yahoo.com</p>
        </footer>
    )
}

export default Footer;