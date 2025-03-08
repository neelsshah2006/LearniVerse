import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        setMessageType("error");
        return;
      }

      setMessage(data.message || "Signup successful");
      setMessageType("success");

    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col gap-8 bg-white shadow-2xl p-8 rounded-2xl w-full max-w-md">
        <div className="text-center gap-2">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <span className="text-gray-500">Join the Learniverse community</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="font-bold">Full Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your full name"
            className="p-2 rounded-md border border-gray-300"
            required
          />

          <label className="font-bold">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md border border-gray-300"
            required
          />

          <label className="font-bold">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="p-2 rounded-md border border-gray-300"
            required
          />

          <button type="submit" className="bg-black text-white rounded-2xl p-2 cursor-pointer">
            Create account
          </button>
        </form>

        {message && (
          <div className={`text-center p-2 rounded-md ${messageType === "success" ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>
            {message}
          </div>
        )}

        <span className="text-gray-500 text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-orange-500">Sign in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
