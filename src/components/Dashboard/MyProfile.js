import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {email, displayName} = user;
   

    const handleSubmit = (even) => {
        even.preventDefault();
        const booking = {
            phone: even.target.phone.value,
            location: even.target.location.value,
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
            console.log(booking);
                
            })
    }

    return (
        <div>
            <h1>Welcome to my profile</h1>
            <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>

                            <input name='name' type="text" defaultValue={user.displayName} className="input input-bordered w-full " />
                            <input name='email' type="text"  defaultValue={user.email} className="input input-bordered w-full " />
                            <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                            <input name='address' type="text" placeholder="Your address" className="input input-bordered w-full" />
                            <input name='location' type="text" placeholder="Your location" className="input input-bordered w-full" />
                            <input type="submit" value='submit' className="btn btn-secondary w-full" />

                        </form>
                    </div>
                </div>
        </div>
    );
};

export default MyProfile;