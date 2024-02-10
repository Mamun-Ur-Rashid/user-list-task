import React, { useState } from 'react';
import { useForm} from 'react-hook-form';

const AddUser = () => {
    const [ newUser, setNewUser ] = useState('');
    console.log(newUser);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onsubmit = (data) => {
        setNewUser(data);
        console.log(data);
        reset();
    } 


    return (
        <div className='my-10 mx-5 rounded-lg border-gray-600 border p-4'>
            <h2 className='text-2xl font-bold text-center justify-start items-center mb-10'> Add User</h2>
            <form onSubmit={handleSubmit(onsubmit)} className=''>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className="mb-2">
                        <label htmlFor="firstName" className=" text-sm font-medium text-gray-600">
                            First Name :
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register('firstName', { required: 'First Name is required' })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="lastName" className=" text-sm font-medium text-gray-600">
                            Last Name :
                        </label>
                        <input type="text" id="lastName"
                            {...register('lastName', { required: 'Last Name is required' })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>


                    <div className="mb-2">
                        <label htmlFor="birthDate" className=" text-sm font-medium text-gray-600">
                            birthDate :
                        </label>
                        <input type="date" id="birthDate"
                            {...register('birthDate', { required: 'birth Date is required' })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bloodGroup" className=" text-sm font-medium text-gray-600">
                            bloodGroup :
                        </label>
                        <input type="text" id="bloodGroup"
                            {...register('bloodGroup', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="domain" className=" text-sm font-medium text-gray-600">
                            domain :
                        </label>
                        <input type="text" id="domain"
                            {...register('domain', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ein" className=" text-sm font-medium text-gray-600">
                            ein :
                        </label>
                        <input type="number" id="ein"
                            {...register('ein', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eyeColor" className=" text-sm font-medium text-gray-600">
                            eyeColor :
                        </label>
                        <input type="text" id="eyeColor"
                            {...register('eyeColor', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthDate" className=" text-sm font-medium text-gray-600">
                            Gender :
                        </label>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="height" className=" text-sm font-medium text-gray-600">
                            height :
                        </label>
                        <input type="number" id="height"
                            {...register('height', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className=" text-sm font-medium text-gray-600">
                            image :
                        </label>
                        <input type="url" id="image"
                            {...register('image', { required: true })} placeholder='Image url'
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ip" className=" text-sm font-medium text-gray-600">
                            ip :
                        </label>
                        <input type="text" id="ip"
                            {...register('ip', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="macAdress" className=" text-sm font-medium text-gray-600">
                            macAdress :
                        </label>
                        <input type="text" id="macAdress"
                            {...register('macAdress', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="maidenName" className=" text-sm font-medium text-gray-600">
                            maidenName :
                        </label>
                        <input type="text" id="maidenName"
                            {...register('maidenName', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className=" text-sm font-medium text-gray-600">
                            password :
                        </label>
                        <input type="password" id="password"
                            {...register('password', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className=" text-sm font-medium text-gray-600">
                            phone :
                        </label>
                        <input type="text" id="phone"
                            {...register('phone', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ssn" className=" text-sm font-medium text-gray-600">
                            ssn :
                        </label>
                        <input type="text" id="ssn"
                            {...register('ssn', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="university" className=" text-sm font-medium text-gray-600">
                            university :
                        </label>
                        <input type="text" id="university"
                            {...register('university', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userAgent" className=" text-sm font-medium text-gray-600">
                            userAgent :
                        </label>
                        <input type="text" id="userAgent"
                            {...register('userAgent', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className=" text-sm font-medium text-gray-600">
                            username :
                        </label>
                        <input type="text" id="username"
                            {...register('username', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="weight" className=" text-sm font-medium text-gray-600">
                            weight :
                        </label>
                        <input type="text" id="weight"
                            {...register('weight', { required: true })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className=" text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                            className="mt-1 ml-1 p-1 border rounded-lg"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                </div>

                <div className='grid grid-cols-1'>
                    <div className="mb-4 gap-2 grid md:grid-cols-5 border">
                        <label htmlFor="address" className=" text-sm font-medium text-gray-600">
                            address:
                        </label>
                        <div>
                            <label htmlFor="address" className=" text-sm font-medium text-gray-600">
                                Address :
                            </label>
                            <input type="text" id="address" {...register('address.address',{required: true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="street" className=" text-sm font-medium text-gray-600">
                                Street:
                            </label>
                            <input type="text" id="street" {...register('address.street', {required: true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className=" text-sm font-medium text-gray-600">
                                City:
                            </label>
                            <input type="text" id="city"{...register('address.city', {required: true})} className="mt-1 ml-1 p-1 w-1/2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className=" text-sm font-medium text-gray-600">
                                State:
                            </label>
                            <input type="text" id="state" {...register('address.state', {required: true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className=" text-sm font-medium text-gray-600">
                                PostalCode:
                            </label>
                            <input type="text" id="state" {...register('address.postalCode', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div className='flex'>
                            <label htmlFor="address" className=" text-sm font-medium text-gray-600">
                                coordinates :
                            </label>
                            <div>
                                <label htmlFor="street" className=" text-sm font-medium text-gray-600">
                                    lat :
                                </label>
                                <input type="text" id="street" {...register('address.coordinates.lat',{required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                                />
                            </div>
                            <div>
                                <label htmlFor="street" className=" text-sm font-medium text-gray-600">
                                    lng:
                                </label>
                                <input type="text" id="street" {...register('address.coordinates.lng', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 gap-2 grid grid-cols-2 md:grid-cols-4 border">
                        <label htmlFor="address" className=" text-sm font-medium text-gray-600">
                            company:
                        </label>
                        <div>
                            <label htmlFor="adress" className=" text-sm font-medium text-gray-600">
                                Address :
                            </label>
                            <input type="text" id="address" {...register('company.address', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="street" className=" text-sm font-medium text-gray-600">
                                Street:
                            </label>
                            <input type="text" id="street" {...register('company.street', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className=" text-sm font-medium text-gray-600">
                                City:
                            </label>
                            <input type="text" id="city"{...register('company.city', {required:true})} className="mt-1 ml-1 p-1 w-1/2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className=" text-sm font-medium text-gray-600">
                                State:
                            </label>
                            <input type="text" id="state" {...register('company.state',{required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className=" text-sm font-medium text-gray-600">
                                PostalCode:
                            </label>
                            <input type="text" id="state" {...register('company.postalCode', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="department" className=" text-sm font-medium text-gray-600">
                                Department :
                            </label>
                            <input type="text" id="department" {...register('company.department',{required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div> <div>
                            <label htmlFor="name" className=" text-sm font-medium text-gray-600">
                                Name :
                            </label>
                            <input type="text" id="name" {...register('company.name', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div> <div>
                            <label htmlFor="title" className=" text-sm font-medium text-gray-600">
                                Title :
                            </label>
                            <input type="text" id="title" {...register('company.title', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div className='flex'>
                            <label htmlFor="coordinates" className=" text-sm font-medium text-gray-600">
                                coordinates :
                            </label>
                            <div>
                                <label htmlFor="lat" className=" text-sm font-medium text-gray-600">
                                    lat :
                                </label>
                                <input type="text" id="lat" {...register('company.coordinates.lat', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                                />
                            </div>
                            <div>
                                <label htmlFor="street" className=" text-sm font-medium text-gray-600">
                                    lng:
                                </label>
                                <input type="text" id="street" {...register('company.coordinates.lng',{required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="mb-2 gap-2 grid grid-cols-2 md:grid-cols-4 border p-1">
                        <label htmlFor="bank" className=" text-sm font-medium text-gray-600">
                            bank:
                        </label>
                        <div>
                            <label htmlFor="cardExpire" className=" text-sm font-medium text-gray-600">
                                cardExpire :
                            </label>
                            <input type="text" id="cardExpire" {...register('bank.cardExpire', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="cardNumber" className=" text-sm font-medium text-gray-600">
                                cardNumber:
                            </label>
                            <input type="text" id="cardNumber" {...register('bank.cardNumber', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="cardType" className=" text-sm font-medium text-gray-600">
                                cardType :
                            </label>
                            <input type="text" id="cardType"{...register('bank.cardType', {required:true})} className="mt-1 ml-1 p-1 w-1/2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className=" text-sm font-medium text-gray-600">
                                currency :
                            </label>
                            <input type="text" id="currency" {...register('bank.currency', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="iban" className=" text-sm font-medium text-gray-600">
                                iban :
                            </label>
                            <input type="text" id="iban" {...register('bank.iban', {required:true})}
                                className="mt-1 ml-1 w-1/2 p-1 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 border p-1'>
                        <label htmlFor="crypto" className=" text-sm font-medium text-gray-600">
                            crypto:
                        </label>
                        <div>
                            <label htmlFor="coin" className=" text-sm font-medium text-gray-600">
                                Coin :
                            </label>
                            <input type="text" id="coin" {...register('crypto.coin', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="network" className=" text-sm font-medium text-gray-600">
                                network :
                            </label>
                            <input type="text" id="network" {...register('crypto.network', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="wallet" className=" text-sm font-medium text-gray-600">
                                Wallet :
                            </label>
                            <input type="text" id="wallet" {...register('crypto.wallet', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 border p-1'>
                        <label htmlFor="hair" className=" text-sm font-medium text-gray-600">
                            hair :
                        </label>
                        <div>
                            <label htmlFor="color" className=" text-sm font-medium text-gray-600">
                                color :
                            </label>
                            <input type="text" id="address" {...register('hair.color', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                        <div>
                            <label htmlFor="type" className=" text-sm font-medium text-gray-600">
                                type :
                            </label>
                            <input type="text" id="type" {...register('hair.type', {required:true})} className="mt-1 p-1 border rounded-lg ml-1 w-1/2"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="bg-gray-600 w-full px-4  text-white p-1 rounded-lg">
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;