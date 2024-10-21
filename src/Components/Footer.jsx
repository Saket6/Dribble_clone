import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constant'
import Link from 'next/link'
export const Footer = () => {
    return (
        <footer className='flex flex-col  lg:flex-row p-20 lg:justify-between ' >
            <div className='flex items-center' >
                <Image className='my-4 lg:my-0 lg:mr-5' src='./logo-purple.svg' alt='' width={100} height={100} />

            </div>
            <ul className='flex flex-col lg:flex-row lg:items-center ' >
                {
                    NavLinks.map((link, index) => {
                        return (
                            <li key={index} className='hover:text-slate-600'  >
                                <Link href={link.href} className='font-bold text-sm mx-3'>
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='flex gap-4 mt-6 lg:mt-0'>
                <Link href=""> <Image src='/twitter.png' height={24} width={24} alt='' /></Link>
                <Link href=""><Image src='/facebook.png' height={24} width={24} alt='' /></Link>
                <Link href="">   <Image src='/insta.png' height={24} width={24} alt='' /></Link>





            </div>
        </footer>
    )
}
