import React from 'react'

export default function MenuItem() {
    return (
        <div className='bg-gray-100 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/20'>
            <img src='pizza.png' alt='pizza' className='max-w-auto max-h-28 mx-auto' />
            <h4 className='font-semibold text-xl my-2'>Paperponi Pizza</h4>
            <p className='text-gray-400 text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visua</p>
            <button className='bg-red-600 rounded-full mt-4 text-white px-8 py-2'>Add to cart $ 20</button>
        </div>
    )
}
