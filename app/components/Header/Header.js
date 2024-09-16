"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/logo.png";

export default function Header() {
  return (
    <div className="fixed top-0 w-full z-50 bg-[#FBE4CC] px-10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="order-1">
          <Image src={logo} alt="Company Logo" width={110} height={50} />
        </div>

        <div className="text-black order-2 w-full md:w-auto">
          <ul className="flex font-semibold">
            <li className="md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC]">
              <Link href="/">Home</Link>
            </li>
            <li className="md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC]">
              <Link href="/products">Products</Link>
            </li>
            <li className="md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC]">
              <Link href="/brands">Brands</Link>
            </li>
            <li className="md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC]">
              <Link href="/latest">Latest</Link>
            </li>
            <li className="md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC]">
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Log in and Sign up buttons */}
        <div className="flex space-x-6 order-3">
          <li className="list-none md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC] font-semibold border-[#1B262C] border-4">
            <Link href="../../pages/login">Log in</Link>
          </li>
          <li className="list-none md:px-4 md:py-2 text-[#1B262C] hover:bg-[#1B262C] hover:text-[#FBE4CC] font-semibold border-[#1B262C] border-4">
            <Link href="../../pages/Sign">Sign up</Link>
          </li>
          <li className="list-none md:px-4 md:py-2 text-[#FBE4CC] bg-[#1B262C] hover:text-[#1B262C] hover:bg-[#FBE4CC] font-semibold border-[#1B262C] border-4">
            <Link href="#">Become a Tasker</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
