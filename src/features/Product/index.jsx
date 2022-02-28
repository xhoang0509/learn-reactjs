import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <Box>
            <h1>Product Feature</h1>
            <Routes>
                <Route index element={<ListPage />} />
            </Routes>
        </Box>
    );
}

export default ProductFeature;
