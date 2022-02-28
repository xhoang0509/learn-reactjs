import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from './Product';

import PropTypes from 'prop-types';
import React from 'react';

ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
};

function ProductList({ data }) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid key={product.id} item padding={1} xs={12} md={6} lg={4}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
