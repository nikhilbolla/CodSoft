"use client"

import React, { useState } from "react";
import NavPills from "./NavPills";
import dropIcon from "../../../assets/menu.png";
import closeIcon from "../../../assets/close.png";
import Image from "next/image";

export default function NavBar() {
  const [state, setState] = useState("hidden");

  return (
   
      <section>
        <div className="md:hidden p-5 flex justify-between">
          <h1 className="text-2xl font-bold">Landing Page</h1>
          <div
            className=""
            onClick={() => {
              setState("");
            }}
          >
            <Image src={dropIcon} alt="icon" height={40} width={30} />
          </div>
        </div>
        <div
          className={`${state} h-screen fixed top-0 left-0 w-full p-10 md:relative bg-white md:h-auto md:px-14 md:py-10 md:flex lg:flex items-center md:justify-between`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Landing Page</h1>
            <div
              onClick={() => {
                setState("hidden");
              }
          
              }
              className="md:hidden"
            >
              <Image src={closeIcon} alt="icon" height={20} width={20} />
            </div>
          </div>
          <div>
            <ul className="md:flex md:gap-6 text-sm">
              <NavPills link={"#header"}>HOME</NavPills>
              <NavPills link={"#services"}>SERVICES</NavPills>
              <NavPills link={"#pricing"}>PRICING</NavPills>
              <NavPills link={"#aboutus"}>ABOUT US</NavPills>
              <NavPills link={"#contantus"}>CONTACT US</NavPills>
            </ul>
          </div>
        </div>
      </section>
   
  );
}
