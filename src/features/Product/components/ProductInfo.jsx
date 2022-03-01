import { makeStyles } from '@mui/styles';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils/common';

ProductInfo.propTypes = {
    product: PropTypes.object,
};
const theme = createTheme();
const useStyles = makeStyles(() => {
    return {
        root: {
            paddingBottom: theme.spacing(2),
            borderBottom: `1px solid ${theme.palette.grey[200]}`,
        },

        description: {
            margin: [theme.spacing(2, 0), '!important'],
        },

        priceBox: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[100],
        },

        salePrice: {
            marginRight: theme.spacing(3),
            fontSize: theme.typography.h4.fontSize,
            fontWeight: 'bold',
        },

        originalPrice: {
            marginRight: theme.spacing(2),
            textDecoration: 'line-through',
        },

        promotionPercent: {},
    };
});
function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, salePrice, originalPrice, promotionPercent, shortDescription } = product;

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4">
                {name}
            </Typography>
            <Typography className={classes.description} variant="body2">
                {shortDescription}
            </Typography>

            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>
                    {formatPrice(salePrice)}
                </Box>

                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className={classes.originalPrice}>
                            {formatPrice(originalPrice)}
                        </Box>
                        <Box component="span" className={classes.promotionPercent}>
                            {` -${promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;
