import { auth } from "@/auth";
import React from "react";
import GitHubLoginBtn from "../GitHubLoginBtn";

const Login = async () => {
  const session = await auth();

  if (!session?.user) {
    return <GitHubLoginBtn />;
  }
  return (
    <div className="text-white text-[16px]">
      Welcome to github - {session?.user?.name}
    </div>
  );
};

export default Login;
