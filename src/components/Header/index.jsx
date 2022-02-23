import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/todo">Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/album">Album</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
