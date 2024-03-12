"use client";
import React, { useState } from "react";
import Link from "next/link";

const Discover = () => {
  const [all, setAll] = useState(true);

  const closeCollection = () => {
    setAll(false);
  };

  return (
    <div>
      {all && (
        <div>
          <div className="first-line:fixed">
            <div className=" flex  z-[100]  sticky top-0  justify-between items-center border-b-[1px] border-b-slate-400 w-[80%]">
              <Link href="Collection" className=" text-green-600">
                Collection
              </Link>
              <button
                className="h-[70px] flex  text-center justify-center items-center pr-8 hover:text-green-300 text-green-600"
                onClick={closeCollection}
              >
                <Link href="/">X</Link>
              </button>
            </div>
            <div className="flex flex-col static pt-[80px] gap-[4px] font-[400] text-[35px] z-[0] ">
              <Link href="https://www.kickstarter.com/discover/pwl?ref=discovery_overlay">
                Project We Love
              </Link>
              <Link href="Trendinghttps://www.kickstarter.com/discover/pwl?ref=discovery_overlay">
                Treding
              </Link>
              <Link href="/Nearly Funded">Nearly Funded</Link>
              <Link href="/Just Launched">Just Launched</Link>
              <Link href="/Upcoming Projects">Upcoming Projects</Link>
              <Link href="/Projects Near You">Projects Near You</Link>
              <Link href="/Everything">Everything</Link>
            </div>
          </div>
          <div className="first-line:fixed">
            <div className="flex  z-[100]  sticky top-[10px] justify-between items-center border-b-[1px] border-b-slate-400 w-[80%]">
              <Link href="section" className="text-green-400">
                Section
              </Link>
            </div>
            <div className="flex flex-col static pt-[80px] gap-[4px] font-[400] text-[35px] z-[0] ">
              <Link href="/project we love">Project We Love</Link>
              <Link href="/Trending">Treding</Link>
              <Link href="/Nearly Funded">Nearly Funded</Link>
              <Link href="/Just Launched">Just Launched</Link>
              <Link href="/Upcoming Projects">Upcoming Projects</Link>
              <Link href="/Projects Near You">Projects Near You</Link>
              <Link href="/Everything">Everything</Link>
            </div>
          </div>
          <div className="first-line:fixed">
            <div className="flex  z-[100]  sticky top-[10px]  justify-between items-center border-b-[1px] border-b-slate-400 w-[80%]">
              <Link href="section" className="text-green-400">
                Categories
              </Link>
            </div>
            <div className="flex flex-col static pt-[80px] gap-[4px] font-[400] text-[35px] z-[0] ">
              <Link href="/project we love">Project We Love</Link>
              <Link href="/Trending">Treding</Link>
              <Link href="/Nearly Funded">Nearly Funded</Link>
              <Link href="/Just Launched">Just Launched</Link>
              <Link href="/Upcoming Projects">Upcoming Projects</Link>
              <Link href="/Projects Near You">Projects Near You</Link>
              <Link href="/Everything">Everything</Link>
            </div>
          </div>
          <div className="first-line:fixed">
            <div className="flex  z-[100]  sticky top-[10px]  justify-between items-center border-b-[1px] border-b-slate-400 w-[80%]">
              <Link href="section" className="text-green-400">
                On Our Radar
              </Link>
            </div>
            <div className="flex flex-col static pt-[80px] gap-[4px] font-[400] text-[35px] z-[0] ">
              <Link href="/project we love">Project We Love</Link>
              <Link href="/Trending">Treding</Link>
              <Link href="/Nearly Funded">Nearly Funded</Link>
              <Link href="/Just Launched">Just Launched</Link>
              <Link href="/Upcoming Projects">Upcoming Projects</Link>
              <Link href="/Projects Near You">Projects Near You</Link>
              <Link href="/Everything">Everything</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Discover;
