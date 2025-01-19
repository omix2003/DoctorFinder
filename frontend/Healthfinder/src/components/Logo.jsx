import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-1 items-center self-start text-2xl font-medium tracking-tighter text-center text-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a15a7bdc4d2d16527c222a0493c9d5142934e3c58550fde87910cf1ca7702c9?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] shadow-[0px_0px_0px_rgba(255,255,255,0.58)] w-[55px]"
        alt="Healthcare Logo"
      />
      <div className="self-stretch my-auto">
        <span className="font-semibold">health</span>
        <span className="font-semibold text-white">care</span>
      </div>
    </div>
  );
}
