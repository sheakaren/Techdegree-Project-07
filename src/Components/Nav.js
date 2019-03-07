import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
        // Copied from example-index.html
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/beer'>Beer</NavLink></li>
                <li><NavLink to='/wine'>Wine</NavLink></li>
                <li><NavLink to='/vodka'>Vodka</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;