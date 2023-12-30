'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function UserTabs({ isAdmin }) {
    const path = usePathname();
    return (
        <div className='flex justify-center py-4 gap-2 tabs'>

            <Link className={path == '/profile' ? 'active' : ''} href={'/profile'} >Profile</Link>
            {
                isAdmin && (
                    <>
                        <Link className={path == '/categories' ? 'active' : ''} href={'/categories'}>Categories</Link>
                        <Link className={path == '/menu-item' ? 'active' : ''} href={'/menu-item'}>Menu Items</Link>
                        <Link className={path == '/users' ? 'active' : '' } href={'/users'}>Users</Link>
                    </>
                )
            }
        </div>
    )
}
