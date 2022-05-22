import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import newIcon from '../../../images/add-user.ico'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../../Hooks/Social';import { toast } from 'react-toastify';
;

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
   

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleRegister = () => {
        navigate('/register')

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('Enter your Email Address')
        }
    }

    return (
        <div className='login mt-2 mx-auto'>
            <h2 className='text-center text-primary  text-4xl'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='d-block mx-auto w-50 mb-2' variant="primary" type="submit">
                    Login
                </Button>
                <div className=' d-flex text-center'>
                    <div>
                        <img className='mx-1 w-7' src={newIcon} alt="" />
                    </div>
                    <div>
                        New to Genius car?
                        <span style={{ cursor: "pointer" }} className='text-primary' onClick={handleRegister}>Please Register</span>
                    </div>
                    </div>
                <div >
                    Forget password?
                    <span style={{ cursor: "pointer" }} className='text-primary' onClick={resetPassword}>Reset password</span>
                </div>
                <Social></Social>
            </Form>
            
        </div>
    );
};

export default Login;