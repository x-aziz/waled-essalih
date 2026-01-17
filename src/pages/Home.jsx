import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ProgramsPreview from "../components/home/ProgramsPreview";
import StatsSection from "../components/home/StatsSection";
import GalleryPreview from "../components/home/GalleryPreview";
'../home/HeroSection.jsx'
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <StatsSection />
      <GalleryPreview />
    </>
  );
};

export default Home;