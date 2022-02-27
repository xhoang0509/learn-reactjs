import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    return (
        <div>
            Product Feature
            <Routes>
                <Route index element={<ListPage />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;
