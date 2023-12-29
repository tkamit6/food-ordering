import React from 'react'

export default function SectionHeader({ subHeader, mainHeader }) {
    return (
        <section className='mx-12'>
            <div className='text-center mb-4'>
                <h3 className='uppercase text-gray-500 font-semibold leading-4'>{subHeader}</h3>
                <h3 className='text-red-600 font-bold text-4xl italic'>{mainHeader}</h3>
            </div>
            
        </section>
    )
}
