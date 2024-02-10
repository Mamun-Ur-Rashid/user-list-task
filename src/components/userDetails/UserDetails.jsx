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
            <div className="md:flex gap-5 bg-gray-200  shadow-lg h-[450px] rounded-md md:w-3/4 mx-auto">
                <figure><img className='m-4 p-4 md:h-[200px] rounded-full ' src={userDetails.image} alt="Movie" /></figure>
                <div className="mt-4 my-4 p-2 md:mt-10  space-y-4">
                    <h2 className="card-title font-bold text-2xl uppercase">{userDetails.firstName} {userDetails.lastName}</h2>
                    <p className='text-sm mb-10 font-bold'>Email: {userDetails.email}</p>
                    <div className='md:flex gap-6 pt-20'>
                        <div>
                            <h2 className='font-bold underline'>Company :</h2>
                            <p>Company Name: {userDetails.company.name}</p>
                            <p>Department : {userDetails.company.department}</p>
                            <p>Title : {userDetails.company.title}</p>
                        </div>
                        <div>
                            <h4 className='uppercase underline font-bold '>Address:</h4>
                            <p className='text-lg'>Adrress: {userDetails.address.address}</p>
                            <p> City : {userDetails.address.city}</p>
                            <p> State : {userDetails.address.state}</p>
                            <p> PostalCode : {userDetails.address.postalCode}</p>
                        </div>
                    </div>

                    <Link to='/'><button className='border border-white bg-gray-400 px-2 p-1 mt-4 rounded-md  md:mt-6'>Back to Users</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;