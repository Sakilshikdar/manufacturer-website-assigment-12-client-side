import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Order = ({ product }) => {
    console.log(product);
    const [user, loading, error] = useAuthState(auth);
    const { displayName, email } = user;

    const handleSubmit = (even) => {
        even.preventDefault();
        const booking = {
            phone: even.target.phone.value,
            quantity: even.target.quantity.value,
            address: even.target.address.value,
            displayName,
            email
        }
        fetch('http://localhost:5000/order', {
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
                }
            else{
                toast('order not done')
            }
                
            })
            

    }

    return (
        <div class=" bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-64'>
                    <h1 >Place Your Order</h1>
                </div>
                <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>

                            <div>
                                <h1 className='text-primary font-bold mb-2'>Quantity</h1>
                                <input name='quantity' type="number" value={10} className="input input-bordered w-full" />
                            </div>

                            <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full " />
                            <input name='email' type="text" value={user?.email} className="input input-bordered w-full " />
                            <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                            <input name='address' type="text" placeholder="Your address" className="input input-bordered w-full" />
                            <input type="submit" value='submit' className="btn btn-secondary w-full" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;