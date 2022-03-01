import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
ProductFeature.propTypes = {};

function ProductFeature() {
    
    return (
        <Box pt={4}>
            <Routes>
                <Route index element={<ListPage />} />
                <Route path=":id" element={<DetailPage />} />
            </Routes>
        </Box>
    );
}

export default ProductFeature;
