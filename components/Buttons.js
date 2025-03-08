import { useRouter } from "next/router";
import React from "react";

const Buttons = () => {
  const router = useRouter();
  const LoginHandler = () => {
    router.push("/auth/login");
  };
  const SignUpHandler = () => {
    router.push("/auth/signup");
  };

  return (
    <div>
      <button
        className="border-2 rounded-2xl px-3 py-1 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
        onClick={LoginHandler}
      >
        Login
      </button>
      <button
        className="border-2 rounded-2xl px-3 py-1 cursor-pointer bg-black text-white transition-all duration-200 ease-in-out hover:scale-105"
        onClick={SignUpHandler}
      >
        SignUp
      </button>
    </div>
  );
};

export default Buttons;
