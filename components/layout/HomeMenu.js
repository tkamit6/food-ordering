import Image from 'next/image'
import React from 'react'
import MenuItem from './menuItem/MenuItem'

export default function HomeMenu() {
    return (
        <section>
            <div className='text-center'>
                <div className='relative'>
                    <div className='absolute -top-20 -z-10 -left-10 w-28 h-48'>
                        <Image src={'/sallad1.png'} alt='img' layout='fill' objectFit='contain' />
                    </div>
                    <div className='absolute -right-10 -top-28 -z-10 w-28 h-48'>
                        <Image src={'/sallad2.png'} alt='img' layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className='text-center mb-4'>
                    <h3 className='uppercase text-gray-500 font-semibold leading-4'>Check Out</h3>
                    <h3 className='text-red-600 font-bold text-4xl'>Menu</h3>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />

            </div>
        </section>
    )
}
