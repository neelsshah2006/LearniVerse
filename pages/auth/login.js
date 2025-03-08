import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Head from "next/head";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed. Please try again.");
      } else {
        setMessage("Login successful!");
        Cookies.set("token", data.token, { expires: 7 });
        window.location.href = "/postlogin/dashboard";
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Login - LearniVerse</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-gray-200 w-screen h-screen flex flex-col gap-10 p-4 md:p-8">
        <div className="flex h-15 w-full items-center px-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/leftArrow.svg" width={24} height={24} alt="Back" />
            <h4>Back to Main Page</h4>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="bg-white flex flex-col p-6 md:p-10 justify-center items-center gap-6 md:gap-10 rounded-2xl shadow-2xs">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Welcome Back
              </h1>
              <p className="text-center">Sign in to Continue to LearniVerse</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <div>
                <label className="font-bold">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="font-bold">Password:</label>
                <div className="flex relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full outline rounded-md h-10 outline-gray-300 px-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-end">
                <Link href="/auth/forgot-password" className="text-amber-400">
                  Forgot Password?
                </Link>
              </div>

              {message && (
                <p
                  className={`text-center ${
                    message.includes("successful")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 text-xl rounded-xl cursor-pointer"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
