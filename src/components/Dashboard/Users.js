import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading/Loading';
import UserData from './UserData';

const Users = () => {
    const { data: persons, isLoading, refetch } = useQuery('persons', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {persons.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((person, index) => <UserData
                                key={person._id}
                                person={person}
                                refetch={refetch}
                                index={index}
                            ></UserData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;