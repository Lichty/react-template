import React from 'react';
import {NavLink} from 'react-router-dom';

import './CSS/Nav.css';

// const linkStyle = {
//     textDecoration: 'none',
//     color: 'white',
//     padding: '10px'

// }

function Nav() {
    return (
        <nav>
            <NavLink exact className='link' activeClassName="active" to="">Home</NavLink>
            <NavLink       className='link' activeClassName="active" to="services">Services</NavLink>
            <NavLink       className='link' activeClassName="active" to="about">About</NavLink>
            <NavLink       className='link' activeClassName="active" to="contact">Contact</NavLink>
        </nav>
    )
}

export default Nav;