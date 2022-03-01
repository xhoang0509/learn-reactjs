import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/common';

Product.propTypes = {};

const useStyles = makeStyles(() => ({
    root: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
}));

function Product({ product }) {
    const navigate = useNavigate();
    const classes = useStyles();
    const thumbnailUrl = product.thumbnail
        ? STATIC_HOST + product.thumbnail.url
        : THUMBNAIL_PLACEHOLDER;

    const handleClick = () => {
        navigate(`${product.id}`);
    };
    return (
        <Box padding={1} onClick={handleClick} className={classes.root}>
            <Box padding={1} minHeight="215px">
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" mr={1} fontSize="16px" fontWeight="bold">
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;
