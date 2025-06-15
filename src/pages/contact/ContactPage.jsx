import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | Contact Us" />
             <ParallaxSection
        imagePath="https://8upload.com/image/684e873c662aa/Contact__3_.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;