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
        imagePath="https://8upload.com/image/684e873c1de16/Company_Profile__1_.jpg"
        title=""
        subTitle=""
      />

      <AboutMe />
    </div>
  );
};

export default AboutMePage;
