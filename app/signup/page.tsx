"use client";
import Image from "next/image";
import Link from "next/link";


import  MainImage  from "@/public/images/nathana-reboucas-My1M8vTfV_4-unsplash.jpg";
import RegisterForm from "../components/RegisterForm"


export default function Home() {

  return (
    <div className=" md:grid grid-cols-1 md:grid-cols-3 w-full flex-col min-h-screen items-center justify-center ">

        <div className="image h-full w-full col-span-1  md:col-span-2">
          <Image src={MainImage} alt="welcome image"  className="object-cover h-[20vh] md:h-full w-full" />
        </div>

        <div className="main contain-content relative col-span-1 flex flex-col h-full  text-center w-[100%] mx-auto max-w-6xl">
          
           

            <div className="bottom relative h-full w-full flex flex-col flex-1 justify-center items-center">
              {/* <h1 className=" mt-20 mb-10 text-2xl w-[90%] mx-auto text-center font-normal tracking-wide">Welcome to your platform of excellence, Mzuni Digital Advocacy</h1> */}

              <RegisterForm />
            
            </div>

            <div className="w-50 z-0 h-50 bg-blue-600 absolute rounded-full md:-bottom-30 -left-100 md:-left-10"></div>
            <div className="w-60 h-60 z-0 bg-blue-600 absolute rounded-full -top-40 md:-right-10  -left-100"></div>


        </div>
    </div>
  );
}
