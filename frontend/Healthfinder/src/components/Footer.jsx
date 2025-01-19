import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const footerLinks = {
    product: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
    company: ["About", "Contact us", "Careers", "Culture", "Blog"],
    support: [
      "Getting started",
      "Help center",
      "Server status",
      "Report a bug",
      "Chat support",
    ],
    social: [
      {
        name: "Facebook",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d028914ba224d2c6d3b45e0364284e046a0303a7344fd1640b0a7b5b38e04ed2?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      },
      {
        name: "Twitter",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3c3d3da9d9747efe73129fcde304a13333ae01dfbba7e6a72c74d07e3fcb24?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      },
      {
        name: "Instagram",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d6b6deca63721a9cdb5b09f81bf6378a7f8a38c947a048771cd1edbea9c09de?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f2dd1532cbc5f4fc431da0fceedb6318b91cfe33b617c40a97e11137618da0a?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      },
      {
        name: "YouTube",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d56074816ab272b62ca10a48fefa1ff5d206689be28146b43da536fa08f1a9e?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      },
    ],
  };

  return (
    <div className="flex overflow-hidden z-10 flex-col mt-0 w-full bg-white max-md:max-w-full">
      <footer className="flex flex-col justify-center px-16 py-24 w-full bg-cyan-700 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-w-[1228px] max-md:flex-col max-md:max-w-full">
          Continuing from the Footer.jsx file:
          <div className="flex flex-col self-start">
            <Logo />
            <div className="mt-4 text-lg leading-8 text-white">
              Copyright © 2022 BRIX Templates | All Rights Reserved
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto text-lg leading-none text-white">
            <h3 className="text-xl font-bold">Product</h3>
            <ul className="mt-11 space-y-5">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-200 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto text-lg leading-none text-white">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="mt-11 space-y-5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-200 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto text-lg leading-none text-white">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="mt-11 space-y-5">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-200 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start self-start mt-4 text-lg leading-none text-white">
            <h3 className="text-xl font-bold">Follow us</h3>
            <ul className="mt-11 space-y-5">
              {footerLinks.social.map((social, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-cyan-200 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <img
                      loading="lazy"
                      src={social.icon}
                      className="object-contain w-6 aspect-square"
                      alt={social.name}
                    />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
