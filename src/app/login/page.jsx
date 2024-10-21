"use client"
import React from 'react';
import Image from 'next/image';
import { useState,useEffect,useContext } from 'react';
import { UserContext } from '@/Contexts/UserContext';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
export default function MyComponent() {

    const{user,setUser}=useContext(UserContext);

    const Router=useRouter();
    const [userDet, setUserDet]=useState({
        'email':'',
        'password':''
    })

    const handleChange = (e) => {
        setUserDet({
         ...userDet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async (e)=>
    {
        e.preventDefault();
       
        try {
            const res = await axios.post('/api/login', userDet);
            console.log("promised data: ",res.data);
            setUserDet({ email: '', password: '' });
            if(res.data.message)
            {
               toast.success(res.data.message);
               setUser(res.data.User);
               setTimeout(() => {
                Router.push('/');
               }, 1000);
              
         
            }
            
            
        } catch (error) {
            toast.error(error.response.data.error);

            console.log(error);
        }
       

    }


    useEffect(()=>
    {
        console.log(user);
    },[user])


    return (
        <div className='grid grid-cols-[0.6fr_1fr] min-h-screen bg-purple-50 '>
        <Toaster/>
            <div>
                <Image className=' h-full ' src='/side.jpg' height={500} width={500} alt='' />
            </div>
            <div>
                <div className="flex justify-center items-center " >
                    {/* <Toaster /> */}
                    <div className="flex min-h-full flex-col rounded-lg justify-center w-full  px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">Sign in to Flexibble</h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-950">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" onChange={handleChange} value={userDet.email} type="email" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-950 ">Password</label>
                                        <div className="text-sm">
                                            <Link href="#" className="font-semibold text-purple-900 hover:text-indigo-500">Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" onChange={handleChange} value={userDet.password} type="password" autoComplete="current-password" required className="block w-full  outline-none rounded-md border-0 py-4 text-gray-900 shadow-sm  p-3 ring-1 ring-inset  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-full bg-slate-950 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not Registered yet?
                                <Link href="/signup" className=" mx-1 font-semibold leading-6 text-purple-900 hover:text-indigo-500">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
