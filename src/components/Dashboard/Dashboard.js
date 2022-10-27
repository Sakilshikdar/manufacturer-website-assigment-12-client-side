import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-2xl font-bold text-purple-500'> dashboard</h1>
                   <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        {admin ? <li><Link to={'/dashboard/users'}>All Users</Link></li> : 
                        <>
                         <li><Link to={'/dashboard'}>My order</Link></li>
                        <li><Link to={'/dashboard/product'}>Add Product</Link></li>
                        <li><Link to={'/dashboard/manageproducts'}>Manage Proudct</Link></li>
                        </>
                        }
                        <li><Link to={'/dashboard/review'}>Reviews</Link></li>
                        <li><Link to={'/dashboard/profile'}>My profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;