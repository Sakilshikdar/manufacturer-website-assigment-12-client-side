import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://assigment-12-server.onrender.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)});

    }, [id]);


    const handleSubmit = (even) => {
        even.preventDefault();
        const booking = {
            phone: even.target.phone.value,
            quantity: even.target.quantity.value,
            address: even.target.address.value,
            price: even.target.price.value,
            displayName,
            email
        }
        fetch('https://assigment-12-server.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast('order done')
                    even.target.reset()
                }
            else{
                toast('order not done')
            }
                
            })
    }



    return (
        <div className=" bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-64'>
                    <h1 className='text-2xl font-bold text-primary'>Place Your Order</h1>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>

                            <div>
                                <h1 className='text-primary font-bold mb-2'>Quantity</h1>
                                <input  name='quantity' type="number" value={product.minQuantity} className="input input-bordered w-full" />
                            </div>

                            <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full " />
                            <input name='email' type="text" value={user?.email} className="input input-bordered w-full " />
                            <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                            <input name='address' type="text" placeholder="Your address" className="input input-bordered w-full" />
                            <input name='price' type="text" placeholder="Your price" className="input input-bordered w-full" />
                            <input type="submit" value='order' className="btn btn-secondary w-full" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;