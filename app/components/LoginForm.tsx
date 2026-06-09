"use client"

import Link from 'next/link';
import {  useState } from 'react';
import { auth } from '@/app/auth/firebase';

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function page() {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const HandleSubmit = async (e: any) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email, password);

        // window.location.href = "/dashboard";

    }
  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center ">
        <div className="main text-black text-left w-[80%] mx-auto ">
           

            <form onSubmit={HandleSubmit} className=" z-40 text-white bg-blue-600 flex flex-col gap-3 w-[100%] mx-auto mt-6 p-5 py-10 rounded-xl shadow">
                <h1 className=" text-2xl font-semibold tracking-wide">Login</h1>
                <p className="text-[14px]">Welcome to your platform of excellence</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border bg-transparent placeholder:text-white border-gray-50 p-3 rounded-md outline-0" name="email" id="email" placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border bg-transparent placeholder:text-white border-gray-50 p-3 rounded-md outline-0" name="password" id="password" placeholder="Password" />
                <button type="submit" className="bg-white hover:bg-white/99 transition-all cursor-pointer active:bg-amber-50/90 text-blue-600 font-bold p-3 rounded-2xl px-10">Login</button>
             
                <div className="buttons text-sm flex items-center gap-3 w-full justify-center mt-1">
                    <p>Don't have an account?</p><Link href="/signup" className="text-blue-50 hover:underline">Sign Up</Link>
                </div>
            </form>

           
        </div>
    </div>
  )
}

export default page