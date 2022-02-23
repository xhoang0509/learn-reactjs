import ShopIcon from '@mui/icons-material/Shop';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
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
                        <Link className={styles.link} to="/">
                            ABC SHOP
                        </Link>
                    </Typography>

                    <NavLink className={styles.link} to="/todo">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink className={styles.link} to="/album">
                        <Button color="inherit">Album</Button>
                    </NavLink>
                    <NavLink className={styles.link} to="/counter">
                        <Button color="inherit">Counter</Button>
                    </NavLink>
                    <NavLink className={styles.link} to="/product">
                        <Button color="inherit">Product</Button>
                    </NavLink>

                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
