import { Close } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, createTheme, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import { cartItemsTotalCountSelector } from 'features/Cart/selectors';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => {
    const theme = createTheme();
    return {
        link: {
            textDecoration: 'none',
            color: '#fff',
            '&.active': {
                color: red[500],
                fontWeight: 'bold',
            },
        },
        diaLogRoot: {
            position: 'relative',
        },
        closeButton: {
            position: 'absolute !important',
            top: theme.spacing(1),
            right: theme.spacing(1),
            zIndex: 1,
            color: theme.palette.grey[800],
        },
        toggleBox: {
            marginTop: theme.spacing(2),
        },
    };
});

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartTotalCount = useSelector(cartItemsTotalCountSelector);
    const navigate = useNavigate();

    const loggedInUser = useSelector((state) => state.user.current);
    const fullNameUser = loggedInUser.fullName;

    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleUserLogout = () => {
        const action = logout();
        dispatch(action);
        handleCloseMenu();
    };

    const handleCartClick = () => {
        navigate('/cart');
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

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link className={classes.link} to="/">
                                ABC SHOP
                            </Link>
                        </Typography>

                        <NavLink className={classes.link} to="todo">
                            <Button color="inherit">Todos</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="album">
                            <Button color="inherit">Album</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="counter">
                            <Button color="inherit">Counter</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="product">
                            <Button color="inherit">Product</Button>
                        </NavLink>
                        {!isLoggedIn && (
                            <Button color="inherit" onClick={handleClickOpenDialog}>
                                Login
                            </Button>
                        )}

                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                            onClick={handleCartClick}
                        >
                            <Badge badgeContent={cartTotalCount} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        {isLoggedIn && (
                            <IconButton
                                color="inherit"
                                onClick={handleMenuClick}
                                aria-haspopup="true"
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </AppBar>
                <Menu
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleCloseMenu}>Hi, {fullNameUser}</MenuItem>
                    <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                </Menu>
            </Box>

            <Dialog
                disableEscapeKeyDown
                onBackdropClick
                open={open}
                onClose={handleClose}
                className={classes.diaLogRoot}
            >
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box className={classes.toggleBox} textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box className={classes.toggleBox} textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account. Register here
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Header;
