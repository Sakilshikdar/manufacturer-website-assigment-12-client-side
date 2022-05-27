import React, { useEffect, useState } from 'react';
import Order from '../Products/Order';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product =><Order 
                product={product}
                ></Order>)
            }
        </div>
    )
};

export default Products;