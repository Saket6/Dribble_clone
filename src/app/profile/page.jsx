"use client"
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '@/Contexts/UserContext';
import { useRouter } from 'next/navigation';
import { Createproject } from '@/Components/Create-project';
import Link from 'next/link';

export default function Profile() {

    const { user, setUser } = useContext(UserContext);
    const [show,setShow]=useState(false);
    const router = useRouter();

    // useEffect(()=>
    // {
    //     if(!user)
    //     {
    //         router.push('/');
    //     }
    // },[])
    return (
        <div className=' min-h-96 ' >
            {user && <div>
                <div className='px-20 py-10 flex items-center justify-center' >
                    <img src={user.avatarUrl} className='rounded-full w-32 h-32' alt="" />
                    <div className='p-4 ml-2'>
                        <h1 className=' font-bold text-4xl' >{user.name}</h1>
                        <p className=' mt-3 '>{user.email}</p>
                        <button onClick={()=>setShow(!show)} className=' mt-3 flex w-full justify-center rounded-full bg-slate-950 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Upload your Project ➕</button>
                    </div> 
                </div>


            </div>
            }
            {
                show && <Createproject show={show} setShow={setShow}/>
            }
            <div>



            </div>
        </div>);
};
