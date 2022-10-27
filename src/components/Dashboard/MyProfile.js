import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProfileUpdate from './ProfileUpdate';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { email, displayName } = user;
    const handleSubmit = (even) => {
        even.preventDefault();
        const profile = {
            phone: even.target.phone.value,
            location: even.target.location.value,
            address: even.target.address.value,
            education: even.target.education.value,
            profile: even.target.profile.value,
            displayName,
            email
        }

        fetch(`https://sleepy-shore-49038.herokuapp.com/updateuser/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    even.target.reset()
                    toast('update done')
                }
                else {
                    toast('something wrong')
                }
            })
    }

    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <ProfileUpdate></ProfileUpdate>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                                    <input name='displayName' type="text" value={user.displayName} className="input input-bordered w-full " />
                                    <input name='email' type="text" value={user.email} className="input input-bordered w-full " />
                                    <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                                    <input name='address' type="text" placeholder="Your address" className="input input-bordered w-full" />
                                    <input name='location' type="text" placeholder="Your location" className="input input-bordered w-full" />
                                    <input name='education' type="text" placeholder="Your education" className="input input-bordered w-full" />
                                    <input name='profile' type="text" placeholder="Your LinkedIn profile link" className="input input-bordered w-full" />
                                    <input type="submit" value='update' className="btn btn-secondary w-full" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

export default MyProfile;