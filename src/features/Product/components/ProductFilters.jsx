import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import FilterByCategories from './Filters/FilterByCategories';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = (newFilterCategory) => {
        if (!onChange) return;

        const newFilters = {
            'category.id': newFilterCategory.id,
            'category.name': newFilterCategory.name,
        };
        onChange(newFilters);
    };
    const handleChange = (values) => {
        if (onChange) {

            // console.log(values)

            onChange(values);
        }
    };
    return (
        <Box>
            <FilterByCategories onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;
