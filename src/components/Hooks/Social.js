import React from 'react';
import logo1 from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate,useLocation } from 'react-router-dom';
import Loading from '../Share/Loading/Loading'
import useToken from './useToken';



const Social = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)

    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error?.message}</p>
        </div>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'rgb(149, 160, 167, 1)' }} className='w-50'></div>
                <div className='mx-2 mb-2'>or</div>
                <div style={{ height: '1px', backgroundColor: 'rgb(149, 160, 167, 1)' }} className=' w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                className='w-50 justify-center mx-auto d-flex  bg-primary my-2 p-1'>
                <img style={{ width: '25px' }} src={logo1} alt="" />
                <span className='px-2 text-white'>Google Sign In</span>
            </button>
        </div>
    );
};

export default Social;