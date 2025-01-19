import React from "react";

export default function ServiceCard({ title, image, description }) {
  return (
    <div className="flex flex-col px-6 pt-6 pb-12 w-full text-lg font-bold text-cyan-700 rounded-3xl bg-neutral-50 max-md:px-5">
      <img
        loading="lazy"
        src={image}
        className="object-contain w-full rounded-xl aspect-[1.56]"
        alt={title}
      />
      <h3 className="self-start mt-6 text-2xl leading-none">{title}</h3>
      <p className="mt-3 leading-8 text-neutral-600">{description}</p>
      <button
        className="flex items-center gap-1.5 self-start mt-8 leading-none text-center hover:text-cyan-800 transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        <span>Learn more</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f0ca99c24a4d54959e6344d40cc399c860f068fe5bdb1d351eb2bda109cd30?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
          className="object-contain w-5 aspect-square"
          alt="Arrow right"
        />
      </button>
    </div>
  );
}
