import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
        <li className='font-semibold text-xl'><Link to="/">Home</Link></li>
        <li className='font-semibold text-xl'><Link to="/blogs">Blogs</Link></li>
        <li className='font-semibold text-xl'><Link to="/profile"> Portfolio</Link></li>
        {
            user && <li className='font-semibold text-xl'><Link to="/dashboard">Dashboard</Link></li>
        }
        <li className='font-semibold text-xl bg-emerald-500 rounded'>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-0 lg:w-[100px] lg:mr-0' src='https://e7.pngegg.com/pngimages/439/953/png-clipart-logo-design-computer-engineering-electrical-engineering-logo-computer-engineering.png'/>
                <span className='font-semibold text-xl w-100'>Tool Manufactures</span>
            </div>
            <div className=" 
             hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div >
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;