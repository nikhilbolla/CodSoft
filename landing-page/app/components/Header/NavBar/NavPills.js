import React from "react";

export default function NavPills({ link, children }) {
  return (
    <li className="pt-10 md:pt-0 lg:pt-0">
      <a
        href={link}
        className="group text-slate-900 font-semibold transition duration-300"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </a>
    </li>
  );
}