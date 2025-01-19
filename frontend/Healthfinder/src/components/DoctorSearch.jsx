import React, { useState } from "react";

export default function DoctorSearch() {
  const [searchParams, setSearchParams] = useState({
    name: "",
    speciality: "",
    city: "",
    available: false,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
  };

  return (
    <div className="flex flex-col self-center px-10 pt-4 pb-10 mt-11 w-full rounded-2xl bg-neutral-50 max-w-[1240px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-4xl font-bold leading-none text-center text-black">
        find a doctor
      </h2>
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-5 justify-between mt-7 w-full max-md:max-w-full"
      >
        <div className="flex flex-wrap gap-6 text-xl leading-10 whitespace-nowrap text-neutral-600 max-md:max-w-full">
          <input
            type="text"
            value={searchParams.name}
            onChange={(e) =>
              setSearchParams({ ...searchParams, name: e.target.value })
            }
            placeholder="name"
            className="grow px-5 py-2.5 bg-white rounded-lg border border-cyan-700 border-solid w-fit focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Doctor's name"
          />
          <input
            type="text"
            value={searchParams.speciality}
            onChange={(e) =>
              setSearchParams({ ...searchParams, speciality: e.target.value })
            }
            placeholder="speciality"
            className="grow px-5 py-2.5 bg-white rounded-lg border border-cyan-700 border-solid w-fit focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Doctor's speciality"
          />
          <input
            type="text"
            value={searchParams.city}
            onChange={(e) =>
              setSearchParams({ ...searchParams, city: e.target.value })
            }
            placeholder="city"
            className="grow px-5 py-2.5 bg-white rounded-lg border border-cyan-700 border-solid w-fit focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="City"
          />
        </div>
        <div className="flex gap-6 my-auto">
          <label className="flex items-center gap-2 text-xl leading-10 text-black cursor-pointer">
            <span>available</span>
            <div
              className="flex flex-col justify-center items-end px-3.5 py-1 my-auto bg-white rounded-3xl border border-cyan-700 border-solid cursor-pointer"
              onClick={() =>
                setSearchParams({
                  ...searchParams,
                  available: !searchParams.available,
                })
              }
            >
              <div
                className={`flex shrink-0 rounded-full h-[26px] w-[26px] transition-all duration-300 ${
                  searchParams.available ? "bg-cyan-700" : "bg-gray-300"
                }`}
              />
            </div>
          </label>
        </div>
        <button
          type="submit"
          className="px-16 py-2.5 text-2xl font-medium leading-10 text-white whitespace-nowrap bg-cyan-700 rounded-lg max-md:px-5 hover:bg-cyan-800 transition-colors"
        >
          search
        </button>
      </form>
    </div>
  );
}
