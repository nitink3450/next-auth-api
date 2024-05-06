
import { signIn } from "@/auth";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import Login from "./common/Login";

const LoginSocials = () => {
  return (
    <>
      <div className="h-screen df bg-[#191919] flex-col gap-[16px]">
        <div className="text-white text-[24px] font-medium">
          Login to get Started
        </div>
        <div className="df gap-[16px]">
          <Login />
          <button className="bg-black text-white text-[18px] font-normal rounded-[6px] p-4 hover:scale-105 active:scale-95 transition-all duration-100 df gap-[12px]">
            <FcGoogle className="h-[32px] w-[32px]" />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginSocials;
