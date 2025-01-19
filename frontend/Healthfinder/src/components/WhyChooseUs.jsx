import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="flex overflow-hidden z-10 flex-col mt-0 bg-white max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-col items-center px-16 pt-24 pb-44 w-full bg-gray-200 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="mb-0 ml-3 w-full max-w-[1204px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto w-full text-lg max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl font-bold leading-10 text-cyan-700 max-md:max-w-full">
                  You have lots of reasons to choose us
                </h2>
                <p className="mt-4 leading-8 text-neutral-600 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam.
                </p>
                <div className="flex gap-6 items-center self-start mt-12 leading-none text-center max-md:mt-10">
                  <button className="gap-2 self-stretch px-9 py-6 my-auto font-bold text-white bg-cyan-700 rounded-[40px] max-md:px-5 hover:bg-cyan-800 transition-colors">
                    Get started
                  </button>
                  <button className="gap-2 self-stretch px-9 py-6 my-auto text-cyan-700 bg-white border border-gray-300 border-solid rounded-[36.55px] max-md:px-5 hover:bg-gray-50 transition-colors">
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d99c68984bbba33c39ae0a540cb6ec9d0f7444e6c1ae949a5b90cb6ed51c1b0f?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990"
                className="object-contain grow w-full rounded-xl aspect-[1.26] max-md:mt-10 max-md:max-w-full"
                alt="Healthcare professionals at work"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
