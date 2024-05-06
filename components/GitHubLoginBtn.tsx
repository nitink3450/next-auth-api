"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubLoginBtn = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="bg-black text-white text-[18px] font-normal rounded-[6px] p-4 hover:scale-105 active:scale-95 transition-all duration-100 df gap-[12px]"
    >
      <FaGithub className="h-[32px] w-[32px]" />
      Sign in with github
    </button>
  );
};

export default GitHubLoginBtn;
