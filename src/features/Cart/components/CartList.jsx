import { makeStyles } from '@mui/styles';
import React from 'react';
import CartItem from './CartItem';

CartList.propTypes = {};
const useStyles = makeStyles(() => ({
    root: {
        listStyleType: 'none',
    },
}));

function CartList({ cartList = [] }) {
    const classes = useStyles();
    return (
        <ul className={classes.root}>
            {cartList.map((cartItem) => (
                <li key={cartItem.product.id}>
                    <CartItem product={cartItem.product} quantity={cartItem.quantity} />
                </li>
            ))}
        </ul>
    );
}

export default CartList;
