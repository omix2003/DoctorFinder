import React from "react";

export default function TrustedCompanies() {
  const companies = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e66f9ba75cc31e01dd62df11c9486c36c6c961f77bb5fbb9829ed4a2823f6574?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 1",
      className: "aspect-[3] w-[111px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2891827c5b2f1aa3a771c94b79e205b572cb99eeedb338b7435310e94148942b?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 2",
      className: "aspect-[5.08] w-[137px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c713f9547fa22f01938126c47b4be120a08e8086851e940bcd6f8bb67e4e8ee6?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 3",
      className: "aspect-[4.35] w-[126px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b062941b120cb77c804172965640547ac73e84b3dc675f7f3b3f8280f0df7ebd?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 4",
      className: "aspect-[4.03] w-[141px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/62e1f8d7b047b46275ccfc4b141b371d0f55033920adf9f74d243122b20cdbe6?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 5",
      className: "aspect-[2.92] w-[108px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4da7729d2f4da4f0b964b89e357ac94553b8a39d36d6ece02a25842ac7cf3c30?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      alt: "Company 6",
      className: "aspect-[4.1] w-[135px]",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-24 w-full bg-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none text-center text-cyan-700 max-md:max-w-full">
            Trusted by 10,000+ companies around the world
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
            {companies.map((company, index) => (
              <img
                key={index}
                loading="lazy"
                src={company.src}
                className={`object-contain shrink-0 self-stretch my-auto ${company.className}`}
                alt={company.alt}
              />
            ))}
          </div>
          <div className="flex gap-3 justify-center items-center mt-12 max-md:mt-10">
            <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 bg-cyan-700 rounded-full" />
            <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 rounded-full bg-cyan-700 bg-opacity-50" />
            <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 rounded-full bg-cyan-700 bg-opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
