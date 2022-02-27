import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

ProductSkeleton.propTypes = {
    length: PropTypes.number,
};

ProductSkeleton.defaultProps = {
    length: 6,
};

function ProductSkeleton({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} md={6} lg={3} padding={1}>
                        <Skeleton variant="rectangular" width="100%" height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;
