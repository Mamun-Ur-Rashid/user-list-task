import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText ] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                const userData = (response.data.users);
                setUsers(userData);
                console.log(response.data.users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [])

    // Search option
    const filterUsers = users.filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className='px-20 mt-10'>
            <div>
                <div>
                    <input type='text' placeholder='Search by name...' value={searchText} onChange={(e) =>setSearchText(e.target.value)} className='md:ml-16 p-1 px-2 border rounded-lg'></input>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 md:p-5 md:mt-8'>

                {
                    filterUsers.map((user) =>
                        <div key={user.id}>
                            <div className="card w-96 h-[350px]  shadow-sm rounded-lg bg-[#a8b2bd83]">
                                <figure><img className='h-[140px] bg-slate-200 p-2 mt-4 md:pt-4 rounded-full' src={user.image} alt="Shoes" /></figure>
                                <div className="card-body text-xl md:text-sm">
                                    <Link to={`/userDetails/${user.id}`}><h2 className="card-title hover:text-2xl" > {user.firstName}</h2></Link>
                                    <h4>Last Name: {user.lastName}</h4>
                                    <p>Email: {user.email}</p>
                                    <p>Company Name: {user.company.name}</p>
                                    <p className=''>Adrress: {user.address.address}, {user.address.city}, {user.address.state}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UserList;