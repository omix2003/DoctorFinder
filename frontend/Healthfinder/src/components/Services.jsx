import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Dental treatments",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/335c48881059e60b50b4c6cfa7115c3d90cbaff8b754fa79a70d583d81ba6aad?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      title: "Bones treatments",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9562cd1c73172701000ad8d3369f5c17ed501542747891ee8691afd1b1f920d?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      title: "Diagnosis",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d21821e502d68004fb8339f997b8f53c50d93f1b85ba011a5bb37bb7d49b2a83?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      title: "Cardiology",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b01d85ba7ad5301312b3cf9398c1664d78a9658f87a2e87c4f82b26eb6f59018?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      title: "Surgery",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3309f1ece408309bc283c4dadd81df076f3f2b3e851e820e760c4be91306717e?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      title: "Eye care",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9ff1a49ef8e40bfb7cfea04a1bd7b878d943449caf811cdbfc52c8adfb94a20b?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
  ];

  return (
    <div className="flex overflow-hidden z-10 flex-col justify-center -mt-44 bg-white max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-40 bg-gray-200 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-center text-4xl font-bold leading-none text-center text-cyan-700">
            Services we provide
          </h2>
          <p className="self-center mt-4 text-lg leading-8 text-center text-neutral-600 w-[614px] max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-16 max-md:grid-cols-1 max-md:mt-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
