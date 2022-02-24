import ShopIcon from '@mui/icons-material/Shop';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
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

                        <Button color="inherit" onClick={handleClickOpen}>
                            Register
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog
                disableEscapeKeyDown
                onBackdropClick
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Header;
