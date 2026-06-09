"use client";
import Image from "next/image";
import Link from "next/link";

import { useAuthState, useSignOut} from "react-firebase-hooks/auth"
import { auth } from "@/app/auth/firebase";

import  MainImage  from "@/public/images/nathana-reboucas-My1M8vTfV_4-unsplash.jpg";
import { BiUser } from "react-icons/bi";
import LoginForm from "../components/LoginForm"


export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className=" md:grid grid-cols-1 md:grid-cols-3 w-full flex-col min-h-screen items-center justify-center ">

        <div className="image h-full w-full col-span-1  md:col-span-2">
          <Image src={MainImage} alt="welcome image"  className="object-cover h-[20vh] md:h-full w-full" />
        </div>

        <div className="main contain-content relative col-span-1 flex flex-col h-full  text-center w-[100%] mx-auto max-w-6xl">
          
            

            <div className="bottom h-full w-full flex flex-col flex-1 justify-center items-center">
              {/* <h1 className=" mt-20 mb-10 text-2xl w-[90%] mx-auto text-center font-normal tracking-wide">Welcome to your platform of excellence, Mzuni Digital Advocacy</h1> */}

              <LoginForm />

              {/* {loading ? (
                  <p>Loading... </p>
              ) : user ? (
                  <div className="flex flex-col items-center gap-3 mt-6">
                      <p className="text-lg">Logged in as: {user.email}</p>
                      <p className="text-sm text-gray-400">Email Verified: {user.emailVerified ? "Yes" : "No"}</p>
                      <button onClick={() => auth.signOut()} className="bg-red-500 p-3 rounded-2xl px-10">Sign Out</button>
                  </div>
              ) : (
                  <div className="buttons flex items-center gap-3 w-full justify-center mt-10">
                      <Link href="/login" className="bg-yellow-500 p-3 rounded-2xl px-10">Login</Link>
                      <Link href="/signup" className="bg-blue-500 p-3 rounded-2xl px-10">Sign Up</Link>
                  </div>
              )} */}
            
            </div>

            <div className="w-50 h-50 bg-blue-600 absolute rounded-full -bottom-30 md:-left-10 -left-100"></div>
            <div className="w-60 h-60 z-0 bg-blue-600 absolute rounded-full -top-40 md:-right-10 right-100"></div>

        </div>
    </div>
  );
}
