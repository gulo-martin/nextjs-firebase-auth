"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {  useState } from 'react'

function page() {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

     const HandleSubmit = (e: any) => {
        e.preventDefault();

        // router.push("/");
    }

  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center bg-black">
        <div className="main text-white text-center w-[90%] mx-auto max-w-6xl">
            <h1 className=" text-5xl font-bold tracking-wide">Login</h1>

            <form onSubmit={HandleSubmit} className=" flex flex-col gap-3 w-[300px] mx-auto mt-6 p-4">
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="border-2 border-gray-500 p-3 rounded outline-0" name="email" id="email" placeholder="Email" />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="border-2 border-gray-500 p-3 rounded outline-0" name="password" id="password" placeholder="Password" />
                <button type="submit" className="bg-green-500 p-3 rounded-2xl px-10">Login</button>
            </form>

            <div className="buttons text-sm flex items-center gap-3 w-full justify-center mt-1">
                <p>Don't have an account?</p><Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default page