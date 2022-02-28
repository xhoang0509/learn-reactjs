import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';
import { Box, Typography } from '@mui/material';

ProductByCategories.propTypes = {
    onChange: PropTypes.func,
};

function ProductByCategories({ onChange }) {
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll();
                const newResponse = response.map((x) => ({ id: x.id, name: x.name }));
                setCategoriesList(newResponse);
                console.log(newResponse);
            } catch (error) {
                console.log('Failed to fetch category', error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) onChange(category.id);
    };
    return (
        <Box padding={1}>
            <Typography>DANH MỤC SẢN PHẨM</Typography>
            <ul>
                {categoriesList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default ProductByCategories;
