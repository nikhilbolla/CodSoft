import React from "react";

export default function ServiceCards({ link, heading, desc }) {
  return (
    <div className="mb-12 lg:mb-0">
      <div className="mb-6 inline-block rounded-full bg-white p-4 text-primary shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={link} />
        </svg>
      </div>
      <h5 className="mb-4 text-xl font-bold">{heading}</h5>
      <p className="">{desc}</p>
    </div>
  );
}
