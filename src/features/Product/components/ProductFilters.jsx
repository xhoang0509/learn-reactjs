import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ProductByCategories from './Filters/ProductByCategories';
import ProductByPrice from './Filters/ProductByPrice';

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;

        const newFilters = {
            'category.id': newCategoryId,
        };
        onChange(newFilters);
    };
    const handlePriceChange = (values) => {
        if (onChange) {
            onChange(values);
        }
    };
    return (
        <Box>
            <ProductByCategories onChange={handleCategoryChange} />
            <ProductByPrice onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFilters;
