import React, { useState } from "react";
import { LogoSvg, SweetShortySvg } from "../svgs";
import Link from "next/link";
import { Links } from "./headerLinks";
import { auth } from "@/auth";
import {
  LogOutButton,
  SignInButton,
} from "@/components/GetSignInAndOut/GetSignInAndOut";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  console.log("session", session);

  const getComp = () => {
    if (!session?.user) {
      return <SignInButton />;
    }
    return (
      <div className="df g-4">
        <Image
          src={session?.user?.image || ""}
          alt="User Avatar"
          height={32}
          width={32}
          className="rounded-full"
        />
        <LogOutButton />
      </div>
    );
  };

  return (
    <>
      {/* shadow-md  */}
      <div className="w-full sticky top-0 left-0 right-0 z-50 md:overflow-hidden transition-all ease-in duration-100 ">
        <div
          className={`md:flex bg-[#131313] items-center justify-between  p-6 z-50 relative transition-all ease-in duration-500`}
        >
          <div className="cursor-pointer gap-[10px] flex items-center">
            <LogoSvg
              className="text-[#7b1fa2] transition ease-in-out duration-500 hover:text-[#30C59B]"
              height="35px"
              width="35px"
            />
            <SweetShortySvg
              className="text-[#7b1fa2] hover:text-[#30C59B] duration-300"
              height="35px"
              width="200px"
            />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in -z-10 bg-[#131313 `}
          >
            {Links.map((item, index) => (
              <li key={index} className="md:ml-8 text-xl md:my-0 my-7 ">
                <Link
                  href={item?.link}
                  className=" text-[#7b1fa2] hover:text-[#30C59B] duration-500 "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {getComp()}
        </div>
      </div>
    </>
  );
};

export default Navbar;
