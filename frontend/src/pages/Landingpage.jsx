// eslint-disable-next-line no-unused-vars
import React from 'react';
import Aboutus from '../components/landingpage/Aboutus';
import CTA from '../components/landingpage/CTA';
import Clients from '../components/landingpage/Clients';
import Counselorregistration from '../components/landingpage/Counselorregistration';
import Diagnosetest from '../components/landingpage/Diagnosetest';
import Footer from '../components/landingpage/Footer';
import Hero from '../components/landingpage/Hero';
import Navbar from '../components/landingpage/Navbar';
import Stats from '../components/landingpage/Stats';
import Testimonials from '../components/landingpage/Testimonials';

import styles from '../style';

const Landingpage = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Diagnosetest />
        <Aboutus />
        <Counselorregistration />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>

  )
}

export default Landingpage