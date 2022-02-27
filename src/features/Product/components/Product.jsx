import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import React from 'react';

Product.propTypes = {};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail
        ? STATIC_HOST + product.thumbnail.url
        : THUMBNAIL_PLACEHOLDER;
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" mr={1} fontSize="16px" fontWeight="bold">
                    {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(
                        product.salePrice
                    )}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;
