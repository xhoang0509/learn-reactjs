import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from 'utils/common';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../cartSlice';
function createData(id, name, image, salePrice, originalPrice, quantity) {
    return { id, name, image, salePrice, originalPrice, quantity };
}

const useStyles = makeStyles(() => ({
    root: {},

    salePrice: {
        fontWeight: ['bold', '!important'],
    },

    originalPrice: {
        textDecoration: 'line-through',
    },
}));

function CartTable({ cartList }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const rows = [];
    cartList.forEach((cart) => {
        const { product, quantity } = cart;
        const { id, name, thumbnail, salePrice, originalPrice } = product;
        const thumbnailUrl = thumbnail ? STATIC_HOST + thumbnail.url : THUMBNAIL_PLACEHOLDER;
        rows.push(createData(id, name, thumbnailUrl, salePrice, originalPrice, quantity));
    });

    const handleIncreaseClick = (id) => {
        const action = increaseQuantity(id);
        dispatch(action);
    };

    const handleDecreaseClick = (id) => {
        const action = decreaseQuantity(id);
        dispatch(action);
    };

    const handleDeleteClick = (id) => {
        const action = removeFromCart(id);
        dispatch(action);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tên sản phẩm</TableCell>
                        <TableCell align="center">Hình ảnh</TableCell>
                        <TableCell align="center">Giá khuyến mãi</TableCell>
                        <TableCell align="center">Giá gốc</TableCell>
                        <TableCell align="center">Số lượng</TableCell>
                        <TableCell align="center">Thành tiền</TableCell>
                        <TableCell align="center">Xóa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">
                                <img src={row.image} width="100px" alt={row.name} />
                            </TableCell>
                            <TableCell className={classes.salePrice} align="center">
                                {formatPrice(row.salePrice)}
                            </TableCell>
                            <TableCell className={classes.originalPrice} align="center">
                                {formatPrice(row.originalPrice)}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => handleDecreaseClick(row.id)}>
                                    <RemoveCircleOutline />
                                </IconButton>
                                {row.quantity}
                                <IconButton onClick={() => handleIncreaseClick(row.id)}>
                                    <AddCircleOutline />
                                </IconButton>
                            </TableCell>
                            <TableCell align="center">
                                {formatPrice(row.salePrice * row.quantity)}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton color="error" onClick={() => handleDeleteClick(row.id)}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;
