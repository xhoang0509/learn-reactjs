import ShopIcon from '@mui/icons-material/Shop';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ShopIcon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <NavLink to="/">ABC SHOP</NavLink>
                    </Typography>

                    <NavLink to="/todo">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/album">
                        <Button color="inherit">Album</Button>
                    </NavLink>
                    <NavLink to="/counter">
                        <Button color="inherit">Counter</Button>
                    </NavLink>
                    <NavLink to="/product">
                        <Button color="inherit">Product</Button>
                    </NavLink>

                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
