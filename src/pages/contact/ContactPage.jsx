import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Al-FWZ Furniture Trading & Contracting | Contact Us" />
             <ParallaxSection
        imagePath="https://8upload.com/image/684dd25737c44/Contact__2_.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;