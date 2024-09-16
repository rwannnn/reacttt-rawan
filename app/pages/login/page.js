"use client";
import React, { useState } from "react";
import Image from "next/image";
import bg from "../../public/logos/bg.jpg";
import logo from "../../public/logos/footer-logo.png";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(""); // Added state to handle the result message

  const handleInput = (e) => {
    const x = e.target.value;
    if (e.target.id === "TB_user") {
      setUser(x);
    } else if (e.target.id === "TB_password") {
      setPassword(x);
    }
  };

  const ShowResult = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const username = [
      "Rawan@gmail.com",
      "Mohammed@hotmail.com",
      "doaa@yahoo.com",
      "Ali@gmail.com",
    ];
    const pass = ["1234", "5678", "0000", "8888"];
    if (username.includes(user) && pass.includes(password)) {
      setResult("Login Successful");
    } else {
      setResult("Login Failed");
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={ShowResult}
          className="bg-[#1B262C] p-8 rounded shadow-lg max-w-md w-full mx-auto flex flex-col relative" // Adjusted width and added flex column and relative positioning
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              priority={true}
            />
          </div>
          <label className="text-[#FBE4CC] text-xs">Email Address</label>
          <input
            type="email"
            id="TB_user"
            value={user}
            onChange={handleInput}
            className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
          />
          <label className="text-[#FBE4CC] text-xs">Password</label>
          <input
            type="password"
            id="TB_password"
            value={password}
            onChange={handleInput}
            className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
          />
          <div className="flex justify-end mt-4">
            {/* Add a wrapper for button alignment */}
            <button
              type="submit"
              className="bg-[#FBE4CC] text-[#1B262C] hover:bg-[#334955] hover:text-[#FBE4CC] font-semibold py-2 px-4 rounded-full"
            >
              Login
            </button>
          </div>
          {/* Result Message - Only show if result is not empty */}
          {result && (
            <div className="absolute bottom-[-20px] left-0 right-0 text-center text-[#1B262C] bg-[#FBE4CC] font-semibold py-2 rounded">
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
