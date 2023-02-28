import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState(false);
    const [products, setProducts] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch(`https://assigment-12-server.onrender.com/order?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigator('/')
                }
                return res.json()
            })
            .then(data => setOrders(data))
        setUpdate(true)
    }, [user, updated])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://assigment-12-server.onrender.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                    setUpdated(!updated)

                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>email</th>
                            <th>Delete</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{order.quantity}</td>
                                <td>{order?.price}</td>
                                <td>
                                    <button
                                        href="#" alt=''
                                        className="btn btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => handleDelete(order._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <span className='text-success'>paid</span>}
                                </td>
                                
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;