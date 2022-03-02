import React from 'react';
import PropTypes from 'prop-types';
import { Box, createTheme, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';
import { useParams } from 'react-router-dom';

ProductMenu.propTypes = {};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 0,
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2, 4),
        },

        '& > li > a': {
            color: theme.palette.grey[700],
            textDecoration: 'none',
        },

        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            fontWeight: 'bold',
        },
    },
}));

function ProductMenu(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root} component="ul">
            <li>
                <Link component={NavLink} to="">
                    Description
                </Link>
            </li>
            <li>
                <Link component={NavLink} to="additional">
                    Additional
                </Link>
            </li>
            <li>
                <Link component={NavLink} to="reviews">
                    Reviews
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;
