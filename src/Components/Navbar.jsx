"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '@/Contexts/UserContext';
import { NavLinks } from '@/constant'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Navbar = () => {
  const [session, setSession] = useState("session")
  const { user, setUser } = useContext(UserContext);
  const router=useRouter();

  const handleLogout=async ()=>
  {
    try {
        const res=await axios.get('/api/logout');
        setUser(null);
        toast.success('Log out successful');
        setTimeout(() => {
          
          router.push('/login');
        }, 1000);
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <nav className='p-8 flex justify-between bg-purple-50 '   >
      <div className="imgDiv flex text-center ">
        <Image
          src="/logo.svg"
          alt="Pebble Logo"
          width={100}
          height={100}
        />
      </div>
      <ul className=' justify-center items-center lg:flex hidden ' >
        {
          NavLinks.map((link, index) => {
            return (
              <li key={index} className='hover:text-slate-600'  >
                <Link href={link.href} className=' font-semibold text-sm mx-3'>
                  {link.text}
                </Link>
              </li>
            )
          })
        }
      </ul>

      <div className='flex h-10   items-center'>
        {
          session ? (
            <div className='flex justify-center' >

              <div className='mx-2' >
                {
                  user ? (
                    <>
                      {/* <Link href='/create-project'>Share your Project</Link> */}
                      <Link className='mx-4 text-sm h-fit  ' href='/profile'>
                        <img src={user.avatarUrl} className=' h-10 w-10 rounded-full' alt="" />
                      </Link>
                      {/* <button onClick={handleLogout} className='font-semibold text-sm py-3 px-6 hover:bg-slate-700 duration-200 text-white rounded-full bg-slate-950' >Log out</button> */}
                    </>
                  ) : (
                    <>
                      <Link className='font-semibold mx-4 text-sm' href='/login'>Log in</Link>
                      <Link href='/signup' >
                        <button className=" font-semibold text-sm py-3 px-6 hover:bg-slate-700 duration-200 text-white rounded-full bg-slate-950" >Sign up</button>
                      </Link>
                    </>
                  )
                }

              </div>
            </div>


          ) : (
            ""
            // <AuthProviders />
          )
        }
      </div>
    </nav>
  )
}
