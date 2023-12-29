import Image from 'next/image'
import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";


export default function Hero() {
    return (
        <section className='hero my-6'>
            <div className='py-20'>
                <h1 className='text-5xl font-extrabold leading-[3.3rem]'>Everything is better with a <span className='text-red-600 relative'> Pizza <span className='absolute w-full h-2 -z-10 rounded-full bg-green-500 left-0 bottom-2'></span></span> </h1>
                <p className='my-4 text-gray-500 text-lg'>Pizza is the missing piece tthat makes every day coplete, a simple yet delicious joy in life</p>
                <div className='flex gap-6 items-center'>
                    <button className='bg-red-600 text-white px-8 py-2 rounded-full flex gap-3 items-center font-semibold'>Order Now <IoIosArrowDropright />
                    </button>
                    <button className='flex items-center gap-3 font-semibold'>Learn More <IoIosArrowDropright /></button>
                </div>
            </div>
            <div className=' relative w-full '>
                <Image src={'/pizza.png'} alt='img' layout={'fill'} objectFit='contain' className='' />
            </div>
        </section>
    )
}
