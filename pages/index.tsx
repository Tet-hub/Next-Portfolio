import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import ProjectDetails from "@/components/ProjectDetails";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkillSet from "@/components/SkillSet";
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
        <Projects />
        <ProjectDetails />
      </div>
    </div>
  );
};

export default HomePage;
