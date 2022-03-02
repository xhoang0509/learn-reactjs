import { Paper } from '@mui/material';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React from 'react';
ProductDescription.propTypes = {
    product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
    const safeDescription = DOMPurify.sanitize(product.description);
    return (
        <Paper elevation={0} style={{ padding: '15px' }}>
            <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
        </Paper>
    );
}

export default ProductDescription;
