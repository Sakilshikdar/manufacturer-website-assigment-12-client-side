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
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-2xl font-bold text-purple-500'> dashboard</h1>
                   <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

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