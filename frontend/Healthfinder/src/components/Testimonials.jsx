import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "An amazing service",
      content:
        "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
      author: "John Carter",
      role: "CEO at Google",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a756ab2e26d352e09ae1d6234569a8cedbca70978384f0586ffe2cbdf8fd58be?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
    },
    {
      quote: "One of a kind service",
      content:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      author: "Sophie Moore",
      role: "MD at Facebook",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c6567a269bba5fa6fa944b4242cf8308844102989d0c755656dd424985bef61?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
    },
    {
      quote: "The best service",
      content:
        "Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.",
      author: "Andy Smith",
      role: "CEO Dot Austere",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06aa622b16ba9b99e56adb42b57aa93282fde5b3d4fa0ffdeb0736c65318ff7b?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
      <div className="flex flex-col px-20 pt-9 pb-36 w-full bg-gray-200 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none text-center text-cyan-700">
            What our clients say
          </h2>
          <p className="mt-4 text-lg leading-8 text-center text-neutral-600 w-[614px] max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-12 w-full max-md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
