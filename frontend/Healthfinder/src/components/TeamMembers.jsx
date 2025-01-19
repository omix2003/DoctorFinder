import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamMembers() {
  const teamMembers = [
    {
      name: "John Carter",
      role: "CEO & Co-Founder",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e17401908f58ae592637ed50667510d81c8d296d8c270aa1c5b62646efa96002?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
    {
      name: "Sophie Moore",
      role: "Dental Specialist",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7bd2fc1f39fc7b1b9b569bdfb250a6155fa8573535e9da08c117e1a9ff036d3b?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
    {
      name: "Matt Cannon",
      role: "Orthopedic",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b2130c4607f715e76eff770763793b9a0279eae8dd70f8ceca2d9c1ebc4750a?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
    {
      name: "Andy Smith",
      role: "Brain Surgeon",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7afdcfcddcdd346046553b2f1fab4fc9b40214271be0d10d0c53e7f1566fce86?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
    {
      name: "Lily Woods",
      role: "Heart Specialist",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8d44b8805ab260681b57c9faab93ca1d7e58573f7ef0f22b33ed19a43fff2726?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
    {
      name: "Patrick Meyer",
      role: "Eye Specialist",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c37d2ef7d553ed733facb2119a36a14499821cf9ceb24ec1faab6836e87346db?placeholderIfAbsent=true&apiKey=6775fcc6169e4cbb81a0c8eeda278990",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    },
  ];

  return (
    <div className="flex overflow-hidden z-10 flex-col mt-0 bg-white max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-36 bg-gray-200 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-center text-4xl font-bold leading-none text-center text-cyan-700">
            Meet our team members
          </h2>
          <p className="self-center mt-4 text-lg leading-8 text-center text-neutral-600 w-[614px] max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
            gravida malesuada quam commodo id integer nam.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-16 max-md:grid-cols-1 max-md:mt-10">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
