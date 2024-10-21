"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {

  useEffect(()=>
  {
    const getuser=async()=>
    {
      const res=await axios.get('/api/user/getuser');
    } 
    getuser();
  },[])

  return (
      <div className="min-h-screen bg-purple-50">
        <div className=" min-h-96 px-60 py-14 flex flex-col items-center justify-center " >
          <div className="py-2  font-semibold px-4 rounded-full bg-pink-300" >Over 3 million ready-to-work creatives!</div>
          <div className=" text-7xl  text-center my-10 font-serif text-slate-900 font-medium tracking-wide  " >The world’s destination for design</div>
          <div className="text-xl font-medium">Get inspired by the work of millions of top-rated designers & agencies around the world.</div>
          <div>
            <Link href='/login' >
            <button className="py-4 px-6 hover:bg-slate-700 duration-200  my-10 text-white rounded-full bg-slate-950" >Get Started</button>
            </Link>
          
          </div>
        </div>
        <h1>Categories</h1>
        <h1>Posts</h1>
        <h1>Load more</h1>
      </div>
  );
}
