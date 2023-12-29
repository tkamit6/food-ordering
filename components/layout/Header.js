'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";


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
                    userState == true || session.status !== 'unauthenticated' ?
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger className='rounded-full'>
                                <div className='flex rounded-[50%] profile-round w-10'>

                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        src={session?.data?.user?.image || 'https://images.unsplash.com/broken'}
                                    />
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat" className='p-2 shadow-2xl rounded-lg '>
                                <DropdownItem key="profile" className="h-14 px-4 py-2 gap-2">
                                <Link href={'/profile'}>
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{session?.data?.user?.email}</p>
                                </Link>
                                </DropdownItem>
                                <DropdownItem onClick={handleLogout} key="logout" color="danger" className='hover:bg-red-300 text-red-500 px-4 py-2 rounded-lg transition-all outline-none border-0 cursor-pointer'>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        : <><Link className='text-white bg-red-600 px-6 py-2 rounded-full' href={'/login'}>Login</Link>
                            <Link className='text-white bg-red-600 px-6 py-2 capitalize rounded-full' href={'/register'}>register</Link></>
                }

            </nav>

        </header>
    )
}
