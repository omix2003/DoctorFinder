import React from "react";
import Header from "./Header";

export default function HeroSection() {
  return (
    <div className="self-center mt-16 w-full max-w-[1253px] max-md:mt-10 max-md:max-w-full">
      <Header />
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full text-xl max-md:mt-10 max-md:max-w-full">
            <h1 className="self-stretch text-4xl font-semibold text-zinc-800 max-md:max-w-full">
              <span>Providing Quality </span>
              <span className="text-cyan-700">Healthcare</span>
              <span> for a </span>
              <span className="text-lime-600">Brighter</span>
              <span> and </span>
              <span className="text-lime-600">Healthy</span>
              <span> Future</span>
            </h1>
            <p className="mt-8 tracking-wider text-black text-opacity-70 max-md:max-w-full">
              At our hospital, we are dedicated to providing exceptional medical
              care to our patients and their families. Our experienced team of
              medical professionals, cutting-edge technology, and compassionate
              approach make us a leader in the healthcare industry
            </p>
            <div className="flex gap-6 mt-28 max-w-full font-medium text-center w-[488px] max-md:mt-10">
              <button
                className="gap-2.5 px-10 py-3.5 tracking-tighter text-white whitespace-nowrap bg-cyan-700 rounded-lg max-md:px-5 hover:bg-cyan-800 transition-colors"
                aria-label="Book appointments"
              >
                appointments
              </button>
              <button
                className="flex items-center gap-2"
                aria-label="Watch video about our services"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/84a5f3c7cd2d5507555cae6b7fb6a5b079b5b3e652371721d9415d759749cafa?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
                  className="object-contain shrink-0 rounded-none aspect-square w-[51px]"
                  alt="Play video"
                />
                <span className="grow shrink my-auto text-black w-[104px]">
                  watch video
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 max-w-full rounded-none h-[626px] w-[582px] max-md:mt-3.5" />
        </div>
      </div>
    </div>
  );
}
