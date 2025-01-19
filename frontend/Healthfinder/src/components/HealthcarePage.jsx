import React from "react";
import HeroSection from "./HeroSection";
import DoctorSearch from "./DoctorSearch";
import Statistics from "./Statistics";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import TeamMembers from "./TeamMembers";
import Testimonials from "./Testimonials";
import TrustedCompanies from "./TrustedCompanies";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function HealthcarePage() {
  return (
    <div className="flex overflow-hidden flex-col pt-7 bg-gray-200">
      <HeroSection />
      <DoctorSearch />
      <Statistics />
      <WhyChooseUs />
      <Services />
      <TeamMembers />
      <Testimonials />
      <TrustedCompanies />
      <Newsletter />
      <Footer />
    </div>
  );
}
