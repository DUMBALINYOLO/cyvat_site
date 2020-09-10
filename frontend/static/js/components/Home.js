import React from 'react';
import '../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Faqs from './Faqs';
import Slider from './Slider';







function Home() {
  return (
    <>
      <HeroSection />
      <Faqs />
      <Cards />
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
