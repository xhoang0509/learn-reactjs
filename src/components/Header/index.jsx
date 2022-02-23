import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

import { List, Item } from './Styled';

function Header() {
    return (
        <div>
            <List>
                <Item>
                    <NavLink to="/">Home</NavLink>
                </Item>
                <Item>
                    <NavLink to="/todo">Todo</NavLink>
                </Item>
                <Item>
                    <NavLink to="/product">Product</NavLink>
                </Item>
                <Item>
                    <NavLink to="/album">Album</NavLink>
                </Item>
                <Item>
                    <NavLink to="/counter">Counter</NavLink>
                </Item>
            </List>
        </div>
    );
}

export default Header;
