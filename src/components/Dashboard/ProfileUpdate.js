import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ProfileUpdate = () => {
    const [users, setUsers] = useState({});
    const [user] = useAuthState(auth);


    useEffect(() => {
        const url = `http://localhost:5000/users/${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }
        , []);
console.log(user);
    return (
        <div class="card">
            <div class="lg:p-8">
                <h2 class="card-title text-3xl ml-4">User Information</h2>
                <p className='text-xl font-mono mb-0'>Email: {users.email}</p>
                <p className='text-xl font-mono'>Name: {users.displayName}</p>
                <p className='text-xl font-mono'>Education: {users.education}</p>
                <p className='text-xl font-mono'>Location: {users.location}</p>
                <p className='text-xl font-mono'>LInkin Profile: {users.profile}</p>
            </div>
        </div>
    );
};

export default ProfileUpdate;