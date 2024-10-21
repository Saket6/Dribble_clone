"use client"
import React, { useEffect } from 'react'
import axios from 'axios';
import { createContext, useState } from 'react'
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] =useState(null);

    const getUser=async()=>
    {
        try{
            const res=await axios.get('/api/user/getuser');
            if(res.data.error)
            {
                console.log(res.data.error)
            }else{
                console.log(res.data);
                setUser(res.data.User);
            }
           
        }catch(e){console.log(e)}
        
    }
    useEffect(()=>
    {
        getUser();
    },[])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}