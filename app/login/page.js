'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useAuth } from '@/contexts/AuthContext';

export default function page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { userState, setUserState } = useAuth()
  const session = useSession()
console.log(session)

  const handleFormLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      // await signIn('credentials')
      const resp = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email, password
        })
      }).then(res => res.json());

      console.log(resp)
      alert(resp.msg)
      if (resp.msg == 'success') {
        setUserState(true)
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }
  return (
    <section className=''>
      <h1 className='text-center text-primary text-4xl text-red-600'>Login</h1>
      <form onSubmit={handleFormLogin} className='flex flex-col gap-4 max-w-xl mx-auto my-5'>
        {/* <input className='' type='text' placeholder='name' /> */}
        <input type='email' disabled={loading} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' disabled={loading} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading} className='block w-full bg-red-600 text-white font-semibold border rounded-md px-6 py-2' type='submit'>Login</button>
        <button disabled={loading} onClick={()=> signIn('google')} className='flex justify-center items-center gap-4 w-full  text-gray-500  font-semibold border border-gray-500 rounded-md px-6 py-2' type='submit'>Login with Google <FcGoogle className='' /></button>

      </form>
    </section>
  )
}
