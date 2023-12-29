'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

export default function page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, seLoading] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [userCreatedErr, setUserCreatedErr] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!password || password < 5) {
      setUserCreatedErr(true)
    }
    else {
      try {
        seLoading(true)
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email, password
          })
        })
          .then(res => res.json())
        if (res.msg == 'okay') {
          setUserCreated(true)
          setUserCreatedErr(false)
        }
        console.log(res)
        seLoading(false)
      } catch (error) {
        seLoading(false)
        setUserCreated(false)
        console.log(error)
      }
    }
  }

  return (
    <section className='text-center'>
      <h1 className='text-center text-primary text-4xl text-red-600'>Register</h1>
      {
        userCreated == true ? (<p className='text-center font-semibold my-4'>User Created successfully now you can <Link href={'/login'} className='text-green-400 underline'> Login </Link> </p>) : <></>
      }

      <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 max-w-xl mx-auto my-5'>
        {/* <input className='' type='text' placeholder='name' /> */}
        <input type='email' disabled={loading} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' disabled={loading} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading} className='block w-full bg-red-600 text-white font-semibold border rounded-md px-6 py-2' type='submit'>Register</button>
        <button disabled={loading} className='flex justify-center items-center gap-4 w-full  text-gray-500  font-semibold border border-gray-500 rounded-md px-6 py-2' type='submit'>Login with Google <FcGoogle className='' /></button>
        {
          userCreatedErr == true ? <p className='text-red-600 font-medium'>try again later</p> : <></>
        }
      </form>
      <p>Already have an account ? <Link className='underline' href={'/login'}>Login</Link> </p>
    </section>
  )
}
