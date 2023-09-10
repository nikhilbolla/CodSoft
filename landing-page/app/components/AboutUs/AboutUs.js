
import React from "react";
import Button from "../Buttons/Button";

import List from "./List";

export default function AboutUs() {
  const points = [
    "Art and Programs",
    "Value for money",
    "Support Team",
    "Successful Growth for business",
  ];

  return (
    <section className="flex items-center ">
      <div className="justify-center flex-1 max-w-6xl py-10 px-10 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <p className="mb-2 text-lg font-semibold  ">About Us</p>
          <h2 className="pb-2 text-4xl font-bold  md:text-5xl ">What we do</h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-slate-300"></div>
            <div className="flex-1 h-2 bg-slate-500"></div>
            <div className="flex-1 h-2 bg-slate-400"></div>
          </div>
        </div>
        <div className="items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-3xl font-bold ">
              We are providing a better facility
            </h2>
            <p className="mb-4 text-base leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul className="mb-10">
                {points.map( (point, index) => (
                    <List key={index} point={point} />
                ))}
            </ul>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
