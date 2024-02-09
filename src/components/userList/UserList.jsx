import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

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

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 md:p-5 md:mt-20'>
            
            {
                users.map((user) =>
                    <div key={user.id}>
                        <div className="card w-full h-[450px]  shadow-sm rounded-lg bg-[#a8b2bd83]">
                            <figure><img className='h-[200px] pt-6 md:pt-4' src={user.image} alt="Shoes" /></figure>
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
    );
};

export default UserList;