"use client"
import React from 'react';
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function MyComponent() {

    const Router=useRouter();
    const [userDet, setUserDet] = useState({
        name: '',
        email: '',
        password: '',
        c_password: '',
        avatar: {},
        desc: '',
        githubUrl: '',
        linkedinUrl: ''

    })

    const handleChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files[0]);
            setUserDet((prev) => {
                return ({ ...prev, avatar: e.target.files[0]})
            })
        }
        else
            setUserDet((prev) => {
                return ({ ...prev, [e.target.name]: e.target.value })
            })
    }
    const handleSubmit = async(e) => { 
        try {
            e.preventDefault();
            let formData=new FormData();
            formData=userDet;

            const res=await axios.post('/api/signup', formData,{
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data);
            if(res.data.message){
                toast.success("Sign up successfull!");
                Router.push('/login');
            }
            else toast.error(res.data.error)

            
        } catch (e) {
            console.log(e);
            toast.error(e.response.data.error);
        }
    }

    return (
        <div className='grid grid-cols-[0.6fr_1fr] min-h-screen bg-purple-50'>
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
                            <form className="space-y-6" action="#" method="POST" encType='multipart/form-data' onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-950">User Name</label>
                                    <div className="mt-2">
                                        <input id="name" name="name" onChange={handleChange} value={userDet.name} type="text" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-950">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" onChange={handleChange} value={userDet.email} type="email" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-950 ">Password</label>

                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" onChange={handleChange} value={userDet.password} type="password" autoComplete="current-password" required className="block w-full  outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm  p-3 ring-1 ring-inset  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="c_password" className="block text-sm font-medium leading-6 text-slate-950">Confirm Password</label>
                                    <div className="mt-2">
                                        <input id="c_password" name="c_password" onChange={handleChange} value={userDet.c_password} type="password" autoComplete="password" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="avatar" className="block p-3 border-solid border-blue-300 rounded-xl w-28 cursor-pointer border-2 text-sm font-medium leading-6 text-slate-950">Avatar ➕ </label>
                                    <div className="mt-2">
                                        <input id="avatar" name="avatar" onChange={handleChange} type="file" autoComplete="email" required className=" hidden w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="desc" className="block text-sm font-medium leading-6 text-slate-950">About Yourself </label>
                                    <div className="mt-2">
                                        <input id="desc" name="desc" onChange={handleChange} value={userDet.desc} type="text" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="githubUrl" className="block text-sm font-medium leading-6 text-slate-950">GITHUB Link</label>
                                    <div className="mt-2">
                                        <input id="githubUrl" name="githubUrl" onChange={handleChange} value={userDet.githubUrl} type="text" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="linkedinUrl" className="block text-sm font-medium leading-6 text-slate-950">Linkedin link</label>
                                    <div className="mt-2">
                                        <input id="linkedinUrl" name="linkedinUrl" onChange={handleChange} value={userDet.linkedinUrl} type="text" autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset p-3  placeholder:text-gray-400   sm:text-sm sm:leading-6" />
                                    </div>
                                </div>





                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-full bg-slate-950 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already Registered?
                                <Link href="/login" className=" mx-1 font-semibold leading-6 text-purple-900 hover:text-indigo-500">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
