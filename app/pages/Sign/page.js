"use client"; // Ensure it's the first line
import React, { useState } from "react";
import Image from "next/image";
import bg from "../../public/logos/bg.jpg";
import logo from "../../public/logos/footer-logo.png";
import { useRouter } from "next/navigation"; // Importing useRouter

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initializing the useRouter

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or any other logic here

    // After successful validation, you can navigate to another page
    router.push("/welcome"); // Replace '/welcome' with the actual page path
  };

  return (
    <>
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
            onSubmit={handleSubmit}
            className="bg-[#1B262C] p-8 rounded shadow-lg max-w-md w-full mx-auto flex flex-col"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image src={logo} alt="Logo" width={150} height={50} />
            </div>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              id="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
              placeholder="Phone Number"
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block mb-4 w-full px-2 py-1 rounded-xl text-[#1B262C] bg-[#FBE4CC]"
              placeholder="Password"
              required
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#FBE4CC] text-[#1B262C] hover:bg-[#334955] hover:text-[#FBE4CC] font-semibold py-2 px-4 rounded-full"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
