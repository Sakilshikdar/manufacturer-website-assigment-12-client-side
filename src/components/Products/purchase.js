import React from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';
import ProductsDetails from './ProductsDetails';

const Purchase = () => {
    const {id} =useParams();
    console.log(id);
    return (
        <div>
            <ProductsDetails></ProductsDetails>
            <Order></Order>
        </div>
    );
};

export default Purchase;