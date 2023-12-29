'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
    const { userState, setUserState } = useAuth()
    const session = useSession()

    const handleLogout = async (e) => {
        console.log('k')
        e.preventDefault()
        await signOut();
        setUserState(false)
    }

    return (
        <header className='flex items-center justify-between sticky top-0 bg-white py-4'>
            <Link className='text-red-600 font-semibold text-4xl relative' href='/'> Pizza <span className='absolute w-full h-2 -z-10 rounded-full bg-green-500 left-0 bottom-1'></span></Link>
            <nav className='flex gap-8 text-gray-500 font-semibold items-center uppercase '>
                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
                {
                    userState == true || session.status !== 'unauthenticated' ? <button onClick={handleLogout} className='text-white bg-red-600 px-6 py-2 rounded-full'>Logout</button> : <><Link className='text-white bg-red-600 px-6 py-2 rounded-full' href={'/login'}>Login</Link>
                        <button className='text-white bg-red-600 px-6 py-2 capitalize rounded-full' href={'/register'}>register</button></>
                }

            </nav>

        </header>
    )
}
