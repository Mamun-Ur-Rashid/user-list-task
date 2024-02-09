import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/users/${userId}`)
                setUserDetails(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUserDetails();
    }, [])

    if (!userDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className='p-4 md:p-20'>
            <div className="md:flex gap-5 bg-gray-200  shadow-lg h-[350px] rounded-md md:w-3/4 mx-auto">
                <figure><img className='p-5 md:h-[300px] md:ml-16' src={userDetails.image} alt="Movie" /></figure>
                <div className="mt-4 my-4 p-2 md:mt-16 md:ml-10 space-y-4">
                    <h2 className="card-title font-bold">First Name: {userDetails.firstName}</h2>
                    <h4 className='text-lg font-semibold'>Last Name: {userDetails.lastName}</h4>
                    <p className='text-lg'>Email: {userDetails.email}</p>
                    <p>Company Name: {userDetails.company.name}</p>
                    <p className='text-lg'>Adrress: {userDetails.address.address}, {userDetails.address.city}, {userDetails.address.state}</p>
                    <Link to='/'><button className='border border-white bg-gray-400 px-2 p-1 mt-4 rounded-md  md:mt-6'>Back to Users</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;