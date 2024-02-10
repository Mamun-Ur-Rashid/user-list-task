import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [finalUsers, setFinalUsers] = useState([]);

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

    useEffect(() => {
        // Search option

        const filterUsers = users.filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchText.toLowerCase()));

        // Sort Option

        const sortedUsers = [...filterUsers].sort((a, b) => {
            if (sortOption === 'name') {
                return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
            }
            else if (sortOption === 'email') {
                return a.email.localeCompare(b.email);
            }
            else if (sortOption === 'compnay') {
                return a.company.name.localeCompare(b.company.name);
            }
            else {
                return 0;
            }
        });
        setFinalUsers(sortedUsers);
    }, [users, searchText, sortOption]);

    const handleAddUser = (FormData) => {
        const newUser = {
            id: users.length + 1,
            ...FormData,
        };
        setUsers([...users, newUser]);
    }

    return (
        <div className='md:px-10 my-10'>
            <div className='flex md:flex-row justify-between bg-slate-400 p-2 rounded-lg gap-4'>
                {/* search bar */}
                <div>
                    <input type='text' placeholder='Search by name...' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='md:ml-16 p-1 px-2 border rounded-lg'></input>
                </div>
                {/* sort button */}
                <div className='mr-16'>
                    <select value={sortOption} name="" id="" onChange={(e) => setSortOption(e.target.value)} className=' p-2 bg-slate-200 rounded-lg md:px-4'>
                        <option value=''>Sort By...</option>
                        <option value='name'>Name</option>
                        <option value='email'>Email</option>
                        <option value='company'>Company</option>
                    </select>
                </div>
            </div>
            <div className='text-right mt-4 mr-32'> 
                <Link to='/addUser'><button className=' bg-slate-400 px-4 p-1 rounded-lg'>Add User</button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2  md:mt-5'>

                {
                    finalUsers.map((user) =>
                        <div key={user.id}>
                            <div className="card w-96 h-[350px]  shadow-sm rounded-lg bg-[#a8b2bd83]">
                                <figure><img className='h-[140px] bg-slate-200 p-2 mt-4 md:pt-4 rounded-full' src={user.image} alt="Shoes" /></figure>
                                <div className="card-body text-xl md:text-sm">
                                    <Link to={`/userDetails/${user.id}`}><h2 className="card-title hover:text-2xl" > {user.firstName} {user.lastName}</h2> </Link>
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