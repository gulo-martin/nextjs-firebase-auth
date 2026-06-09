import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center bg-black">
        <div className="main text-white text-center w-[90%] mx-auto max-w-6xl">
            <h1 className=" text-5xl font-bold tracking-wide">Welcome to My App</h1>

            <div className="buttons flex items-center gap-3 w-full justify-center mt-10">
              <Link href="/login" className="bg-yellow-500 p-3 rounded-2xl px-10">Login</Link>
              <Link href="/signup" className="bg-blue-500 p-3 rounded-2xl px-10">Sign Up</Link>
            </div>
        </div>
    </div>
  );
}
