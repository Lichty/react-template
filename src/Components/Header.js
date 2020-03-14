import React from 'react';

import {Link} from 'react-router-dom';

function Header() {

    const pStyle = {
        padding: "175px 0 0 0",
        textAlign: "center"
    }
    
    const headerStyle = {
        backgroundColor: "lightblue",
        width: "100%",
        height: "400px",
        position: "relative",
        display: "inline-block"
    }

    const linkStyle = {
        textDecoration: 'none'
    }
    

    return (      
        <header style={headerStyle}>
            <Link style={linkStyle} to=''><p style={pStyle}>{'<Logo goes here>'}</p></Link>
        </header>
    )
}

export default Header;