import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import CheckoutForm from './CheckOut';

const stripePromise = loadStripe('pk_test_51L1ApHGtFiAlPX1SOAeyZRcWXuG5k70O4OXUeK3oO15CETwMsX4e7F94lY4idzMwVUvqENdIwhJ8syi5aCbvnueh00K7mbDnMM');


const Payment = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const url = `https://sleepy-shore-49038.herokuapp.com/order/${id}`;

    const { data: detail, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
   
    return (
        <div>
            <h1>please pay for : {id}</h1>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {user.displayName}</p>
                    <p className="text-success font-bold">Quantity: {detail.quantity}</p>
                    <p className="text-success font-bold">pay , {detail.price}$</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm detail={detail} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;