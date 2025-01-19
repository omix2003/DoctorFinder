import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex gap-5 justify-between self-center w-full text-xl tracking-tighter text-center max-w-[1240px] max-md:max-w-full">
      <Logo />
      <nav className="flex flex-col my-auto text-black max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-wrap gap-7 items-start max-md:max-w-full">
            <a
              href="#"
              className="text-cyan-700 hover:text-cyan-800 transition-colors"
            >
              home
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              service
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              contact us
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              help
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              blogs
            </a>
          </div>
        </div>
        <div className="flex shrink-0 bg-cyan-700 rounded-lg h-[3px] w-[58px]" />
      </nav>
      <div className="flex gap-7">
        <a
          href="#"
          className="grow my-auto font-medium text-cyan-700 hover:text-cyan-800 transition-colors"
        >
          sign up
        </a>
        <a
          href="#"
          className="gap-2.5 px-10 py-3.5 font-bold text-white bg-cyan-700 rounded-lg max-md:px-5 hover:bg-cyan-800 transition-colors"
        >
          log in
        </a>
      </div>
    </header>
  );
}
