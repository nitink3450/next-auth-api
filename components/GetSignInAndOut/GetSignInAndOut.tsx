"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function SignInButton() {
  return (
    <div className="md:ml-[100px] flex md:flex-row flex-col md:justify-center items-start md:items-center md:gap-0 gap-10">
      <div className="md:ml-8 text-xl md:my-0">
        <button
          onClick={() => signIn("github")}
          className="text-[#7b1fa2]  hover:text-[#30C59B] md:mr-8 duration-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export function LogOutButton() {
  return (
    <div className="df gap-[12px] ml-[20px]">
     
      <button
        onClick={() => signOut()}
        className="text-[#7b1fa2]  hover:text-[#30C59B] md:mr-8 duration-500"
      >
        SignOut
      </button>
    </div>
  );
}
