import React from "react";

export default function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className="flex flex-col items-center px-10 py-12 w-full bg-white rounded-3xl border border-gray-300 border-solid max-md:px-5">
      <img
        loading="lazy"
        src={image}
        className="object-contain w-40 max-w-full rounded-full aspect-square"
        alt={name}
      />
      <h3 className="mt-10 text-3xl font-bold leading-none text-center text-cyan-700">
        {name}
      </h3>
      <div className="mt-2 text-lg font-bold tracking-widest leading-none text-center uppercase text-zinc-800">
        {role}
      </div>
      <p className="self-stretch mt-4 text-lg leading-8 text-center text-neutral-600">
        {description}
      </p>
      <div className="flex gap-4 justify-center items-center mt-8">
        <a href="#" aria-label={`${name}'s Facebook profile`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b22e23e345372ea1a393c5004aebcb5effcc08e81bcc5b7762c6070e60c732e?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
            className="object-contain w-9 aspect-square"
            alt="Facebook"
          />
        </a>
        <a href="#" aria-label={`${name}'s Twitter profile`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/412de0609c0e806deec82e783fb6152e67c7fabcc65837ee4b58dded0e93f33b?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
            className="object-contain w-9 aspect-square"
            alt="Twitter"
          />
        </a>
        <a href="#" aria-label={`${name}'s LinkedIn profile`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37bc8f5ce8a9ccbd04888a7792d11a41b39023decea34a9dbea5ac83ed9c957e?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
            className="object-contain w-9 aspect-square"
            alt="LinkedIn"
          />
        </a>
        <a href="#" aria-label={`${name}'s Instagram profile`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f6d679a0a97addee3218e3d0aa04ec581421ec1f630564d838d812efa743ba5?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
            className="object-contain w-9 aspect-square"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}
