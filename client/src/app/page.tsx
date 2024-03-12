"use client";
import { Sepolia } from "@thirdweb-dev/chains";
import React from "react";
import Play from "@/components/Play";
import Adventure from "@/components/Adventure";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
function App() {
  return <Component />;
}
const Component = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="bg-hero  bg-center h-[900px] w-screen bg-cover">
        <Play />
      </section>
      <section className="">
        <Adventure />
      </section>
      <Footer />
    </main>
  );
};

export default Component;
