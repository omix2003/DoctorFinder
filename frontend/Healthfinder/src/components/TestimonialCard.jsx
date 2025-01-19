import React from "react";

export default function TestimonialCard({
  quote,
  content,
  author,
  role,
  image,
}) {
  return (
    <div className="flex flex-col grow items-start px-10 py-12 w-full text-lg font-bold leading-none bg-white rounded-3xl border border-gray-300 border-solid text-neutral-600 max-md:px-5">
      <img
        loading="lazy"
        src={image}
        className="object-contain w-20 rounded-none aspect-square"
        alt={`${author}'s testimonial`}
      />
      <h3 className="mt-8 text-2xl text-zinc-800">"{quote}"</h3>
      <p className="self-stretch mt-3 leading-8">{content}</p>
      <div className="mt-8 text-cyan-700">{author}</div>
      <div className="mt-2">{role}</div>
    </div>
  );
}
