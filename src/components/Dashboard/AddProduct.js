import React, { useState } from 'react';
import { toast } from 'react-toastify'

const AddProduct = () => {

    const handleSubmit = (even) => {
        even.preventDefault();
        even.target.reset();
        const product = {
            name: even.target.name.value,
            available: even.target.quantity.value,
            minQuantity: even.target.minQuantity.value,
            price: even.target.price.value,
            img: even.target.img.value,
            description : even.target.description.value

        }
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('product successfully added')
                }
                else {
                    toast('something wrong')
                }
            })
            
    }

    return (
        <div class=" bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-64'>
                    <h1 className='text-2xl text-primary font-bold'>Add Your Order</h1>
                </div>
                <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>

                            <input name='name' type="text" className="input input-bordered w-full" placeholder='name' />
                            <input name='price' type="text" className="input input-bordered w-full " placeholder='price' />
                            <input name='quantity' type="text" placeholder="quantity" className="input input-bordered w-full" />
                            <input name='minQuantity' type="text" placeholder="Minimum quantity" className="input input-bordered w-full" />
                            <textarea name="description" id="" placeholder='description'></textarea>
                            <input name='img' type="text" placeholder="photo url" className="input input-bordered w-full" />
                            <input type="submit" value='submit' className="btn btn-secondary w-full" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;