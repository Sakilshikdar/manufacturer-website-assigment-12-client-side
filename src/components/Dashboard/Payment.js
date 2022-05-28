import React, { useState } from 'react';

const Cart = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplierName, sold } = product;
    const [quantityNum, setQuantityNum] = useState(quantity);

    const handleQuantity = () => {
        if (quantityNum > 0) {
            setQuantityNum(preCount => preCount - 1)
        }
        fetch(`https://gentle-harbor-89262.herokuapp.com/product/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quantityNum),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='service-container shadow-lg p-3 mb-5 bg-white rounded'>
            <img style={{ width: '200px' }} src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <h6>Description: {description}...</h6>
            <p>quantity: {quantityNum}</p>
            <h6>supplier Name: {supplierName}</h6>
            <p>Sold: {sold}</p>
            <button onClick={() => handleQuantity(_id)} className='button border-3'>delivered</button>
        </div>
    );
};

export default Cart;