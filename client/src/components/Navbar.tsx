"use client";
import { useWallet } from "@thirdweb-dev/react";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
const Navbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const closeSearchInput = () => {
    setShowSearchInput(false);
  };
  return (
    <ThirdwebProvider>
      {showSearchInput && (
        <div className="w-auto flex  h-[70px]   items-center shadow-lg">
          <input
            type="text"
            placeholder="Search project and categories"
            className=" Shadow-lg w-full  border-b-slate-300  pl-8 focus:outline-none "
          />
          <button
            className="h-[70px] flex  text-center justify-center items-center pr-8 hover:text-green-300 text-black "
            onClick={closeSearchInput}
          >
            X
          </button>
        </div>
      )}
      {!showSearchInput && (
        <nav className="flex justify-center md:flex flex-col sm:flex-col items-center overflow-hidden">
          <div className="h-[100px] sm:flex  flex md:hidden  w-screen justify-center items-center">
            <Link href="/">
              <Image src="/logo.png" alt="" width={250} height={250} />
            </Link>
          </div>
          <div className="flex p-7   items-center border-[1px]sm:border-[1px] sm:border-slate-400 border-[1px] w-screen h-10 justify-between">
            <div className="flex md:justify-between gap-8">
              <Link href="/discover" className="hover:text-green-700">
                Discover
              </Link>
              <Link href="./Startproject" className="hover:text-green-700">
                Start a Project
              </Link>
            </div>
            <div className="md:flex sm:hidden hidden justify-center items-center ">
              <Link href="/" className="hover:text-green-700">
                <Image
                  src="/logo.png"
                  alt=""
                  width={250}
                  height={250}
                  className="hover:text-green-700"
                />
              </Link>
            </div>
            <div className="flex  gap-[30px] items-center">
              <div>
                <button
                  className="flex items-center gap-1 hover:text-green-700"
                  onClick={toggleSearchInput}
                >
                  <span className="md:flex sm:hidden hidden "> Search </span>
                  <Image src="/search.png" alt="" width={15} height={15} />
                </button>
              </div>
              <div className="w-auto">
                <ConnectWallet />
              </div>
            </div>
          </div>
        </nav>
      )}
    </ThirdwebProvider>
  );
};

export default Navbar;
