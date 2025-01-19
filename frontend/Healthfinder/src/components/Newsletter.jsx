import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full">
      <div className="flex flex-col items-center px-20 pt-11 pb-40 w-full bg-gray-200 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col -mb-8 max-w-full w-[560px] max-md:mb-2.5">
          <h2 className="self-center text-3xl font-bold leading-none text-zinc-800">
            Subscribe to our newsletter
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-6 mt-3 w-full text-base leading-none text-center max-md:max-w-full"
          >
            <div className="flex flex-auto gap-10 items-center px-6 py-5 bg-white min-h-[54px] rounded-[50px] text-neutral-600 max-md:px-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none"
                required
                aria-label="Email address for newsletter"
              />
            </div>
            <button
              type="submit"
              className="gap-2 px-6 py-5 font-bold text-white whitespace-nowrap bg-cyan-700 rounded-[30px] max-md:px-5 hover:bg-cyan-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
