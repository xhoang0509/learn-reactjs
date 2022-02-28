import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ProductByCategories from './Filters/ProductByCategories';

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    const handleCategoyChange = (newCategoryId) => {
        if (onChange) {
            const newFilters = {
                ...filters,
                'category.id': newCategoryId,
            };
            onChange(newFilters);
        }
    };
    return (
        <Box>
            <ProductByCategories onChange={handleCategoyChange} />
        </Box>
    );
}

export default ProductFilters;
