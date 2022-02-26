import { Close } from '@mui/icons-material';
import ShopIcon from '@mui/icons-material/Shop';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => {
    const theme = createTheme();
    return {
        root: {
            position: 'relative',
            paddingTop: theme.spacing(4),
        },
        link: {
            textDecoration: 'none',
            color: '#fff',
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
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

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
                            <Link className={classes.link} to="/">
                                ABC SHOP
                            </Link>
                        </Typography>

                        <NavLink className={classes.link} to="/todo">
                            <Button color="inherit">Todos</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="/album">
                            <Button color="inherit">Album</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="/counter">
                            <Button color="inherit">Counter</Button>
                        </NavLink>
                        <NavLink className={classes.link} to="/product">
                            <Button color="inherit">Product</Button>
                        </NavLink>

                        <Button color="inherit" onClick={handleClickOpen}>
                            Login/Register
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog
                disableEscapeKeyDown
                onBackdropClick
                open={open}
                onClose={handleClose}
                className={classes.diaLogRoot}
            >
                <IconButton
                    className={classes.closeButton}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box
                                className={classes.toggleBox}
                                textAlign="center"
                            >
                                <Button
                                    color="primary"
                                    onClick={() => setMode(MODE.LOGIN)}
                                >
                                    Already have an account. Login here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box
                                className={classes.toggleBox}
                                textAlign="center"
                            >
                                <Button
                                    color="primary"
                                    onClick={() => setMode(MODE.REGISTER)}
                                >
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
