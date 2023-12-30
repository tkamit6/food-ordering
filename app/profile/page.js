'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import UserTabs from '../../components/layout/UserTabs'

export default function page() {
    const [phone, setPhone] = useState('')
    const [Street, setStreet] = useState('')
    const [city, setcity] = useState('')
    const [postalcode, setpostalCode] = useState('')
    const [country, setcountry] = useState('')

    const session = useSession()
    const userName = session?.data?.user?.name;

    const [updateUserName, setupdateUserName] = useState(userName || '');

    // if (session.status === 'loading') {
    //     return 'Loading...'
    // }
    // if (session.status === 'unauthenticated') {
    //     return redirect('/login')
    // }
    const userImage = session?.data?.user?.image;

    useEffect(() => {
        if (session.status === 'authenticated') {
            setupdateUserName(session?.data?.user?.name)
        }
    }, [session])


    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const resp = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: updateUserName, phone, Street, city, postalcode, country })
        })

        console.log(resp);
        console.log(updateUserName);
    }


    return (
        <section className='my-4'>
        <UserTabs isAdmin={true} />
            <h1 className='text-center text-red-600 text-4xl mb-4'>
                Profile
            </h1>
            <form onSubmit={handleProfileUpdate} className='max-w-md mx-auto '>
                <div className='flex gap-2 '>
                    <div className='start-0'>
                        <Image src={userImage} alt='img' width={80} height={80} />

                        <label htmlFor='file' className='cursor-pointer'>
                            <input type='file' hidden id='file' />
                            edit
                        </label>
                        {/* <button type='button'> edit picture</button> */}
                    </div>
                    <div className='grow gap-2 flex flex-col'>
                        <input type='text' placeholder='Your Name' value={updateUserName} onChange={(e) => setupdateUserName(e.target.value)} />
                        <input type='text' disabled placeholder='Email' value={session?.data?.user?.email} />
                        <input type='tel' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type='text' placeholder='Street Address' value={Street} onChange={(e) => setStreet(e.target.value)} />
                        <div className='flex gap-2'>
                            <input type='text' placeholder='city' value={city} onChange={(e) => setcity(e.target.value)} />
                            <input type='text' placeholder='postal Code' value={postalcode} onChange={(e) => setpostalCode(e.target.value)} />
                        </div>
                        <input type='text' placeholder='Country' value={country} onChange={(e) => setcountry(e.target.value)} />
                        <button type='submit' className='bg-red-600 text-white text-center w-full px-4 py-2 rounded-md'>Save</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
