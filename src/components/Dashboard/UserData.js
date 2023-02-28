import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserData = ({ person, index, refetch }) => {
    const { email, role } = person;
    const [user] = useAuthState(auth)
    const makeAdmin = () => {
        fetch(`https://assigment-12-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res=> {
                if(res.status === 403){
                    toast.error('Filled to Make an admin')
                }
            })
            .then(data => {
                if (data.success) {
                    toast('successfully make admin')
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='btn btn-xs' onClick={makeAdmin}>Make Admin</button>}</td>
        </tr>

    );
};

export default UserData;