import React from 'react';
import Order from './Order';
import ProductsDetails from './ProductsDetails';

const Purchase = () => {
    return (
        <div>
            <ProductsDetails></ProductsDetails>
            <Order></Order>
        </div>
    );
};

export default Purchase;