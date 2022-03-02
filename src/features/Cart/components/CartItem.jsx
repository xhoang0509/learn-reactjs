import { createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils/common';
import { cartItemsCountSelector, cartTotalSelector } from '../selectors';

CartItem.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ccc',
    },

    boxInfo: {
        width: '270px',
        display: 'flex',
        flexFlow: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
        '& > img': {
            width: '80px',
        },

        '& > p': {
            fontWeight: 'bold',
        },
    },

    price: {
        display: 'flex',
        flexFlow: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    originalPrice: {
        textDecoration: 'line-through',
        color: theme.palette.grey[500],
        fontSize: '0.75rem',
    },
}));

function CartItem({ product, quantity }) {
    const classes = useStyles();
    const thumbnailUrl = product.thumbnail
        ? STATIC_HOST + product.thumbnail.url
        : THUMBNAIL_PLACEHOLDER;
    return (
        <Box className={classes.root}>
            <Box className={classes.boxInfo}>
                <img src={thumbnailUrl} alt={product.name} />
                <Typography variant="body2">{product.name}</Typography>
            </Box>
            <Box className={classes.price}>
                <Typography className={classes.salePrice}>
                    {formatPrice(product.salePrice)}
                </Typography>
                <Typography className={classes.originalPrice}>
                    {formatPrice(product.originalPrice)}
                </Typography>
            </Box>
            <Typography>Số lượng: {quantity}</Typography>
            <Typography>Tổng tiền: {formatPrice(product.salePrice * quantity)}</Typography>
        </Box>
    );
}

export default CartItem;
