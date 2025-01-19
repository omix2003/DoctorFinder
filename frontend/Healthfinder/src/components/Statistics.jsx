import React from "react";

export default function Statistics() {
  const stats = [
    { value: "99%", label: "Customer satisfaction" },
    { value: "15k", label: "Online Patients" },
    { value: "12k", label: "Patients Recovered" },
    { value: "240%", label: "Company growth" },
  ];

  return (
    <div className="flex overflow-hidden flex-col mt-24 w-full font-bold text-center bg-gray-200 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-20 pt-8 pb-44 w-full bg-gray-200 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col -mb-9 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-center text-4xl leading-none text-cyan-700">
            Our results in numbers
          </h2>
          <div className="flex flex-wrap gap-5 justify-between mt-16 max-md:mt-10 max-md:max-w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="self-center text-5xl leading-none">
                  <span className="text-cyan-700 text-opacity-50">
                    {stat.value.replace(/%|k/, "")}
                  </span>
                  <span className="text-cyan-700">
                    {stat.value.includes("%") ? "%" : "k"}
                  </span>
                </div>
                <div className="mt-1 text-2xl leading-none text-zinc-800">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
