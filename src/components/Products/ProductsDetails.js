import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
       
    return (
        <div className='service-container sm:w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded'>
            <img className='mx-auto py-2' style={{ width: '300px'}} src={product.img} alt="" />
            <h2 className='text-xl'>{product.name}</h2>
            <p className='text-xl'>Price: {product.price}$</p>
            <h6 className='text-xl'>Description: {product.description}</h6>
            <p className='text-xl'>Available-quantity: {product.available}</p>
            <h6 className='text-xl'>Minimum-Order: {product.minimum}</h6>
        </div>
    )
};

export default ProductsDetails;