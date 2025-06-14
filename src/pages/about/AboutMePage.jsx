import AboutMe from "./AboutMe";
import PageTitle from "../reusable/PageTitle";
import Parallax from "../reusable/Parallax";
import ParallaxSection from "../reusable/Parallax";
import React from "react";

const AboutMePage = () => {
  return (
    <div>
     <PageTitle title="AL-FWZ Furniture Trading & Contracting | About Us" />
      <ParallaxSection
        imagePath="https://8upload.com/image/684dcf3e3f3e7/Company_Profile.jpg"
        title=""
        subTitle=""
      />

      <AboutMe />
    </div>
  );
};

export default AboutMePage;
