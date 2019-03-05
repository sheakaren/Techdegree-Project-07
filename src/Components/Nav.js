import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
        // Copied from example-index.html
        <nav class="main-nav">
            <ul>
                <li><NavLink to='/liger'>Liger</NavLink></li>
                <li><NavLink to='/donkey'>Donkey</NavLink></li>
                <li><NavLink to='/waffle'>Waffle</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;