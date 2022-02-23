import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
    products: PropTypes.array,
};

Product.defaultProps = {
    products: [],
};

function Product(props) {
    const { products } = props;

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h4>{product.shortDescription}</h4>
                    <h4>Giá gốc: {product.originalPrice}</h4>
                    <h4>Giá gốc: {product.salePrice}</h4>
                </div>
            ))}
        </div>
    );
}

export default Product;
