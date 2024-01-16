import Hero from "@/components/HeroSection";
import About from "@/components/AboutSection";
import Services from "@/components/ServiceSection";
import Education from "@/components/Education";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import ProjectDetails from "@/components/ProjeectSection";
import Certificates from "@/components/CertificateSection";
import SkillSet from "@/components/SkillSection";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div id="hero">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
      </div>
      <div className="relative z-[30]">
        <About />
        <Services />
        <Education />
        <SkillSet />
        <ProjectDetails />
        <Certificates />
      </div>
    </div>
  );
};

export default HomePage;
