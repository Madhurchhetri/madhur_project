import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useSmoothScroll from "./hooks/useSmoothScroll";
import BrandMarquee from "./components/BrandMarquee";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Goals from "./components/Goals";
import ParallaxSection from "./components/ParallaxSection";
import Testimonials from "./components/Testimonials";
import CompanySection from "./components/CompanySection";
import WhatWeSell from "./components/WhatWeSell";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Next sections will come here */}
        <BrandMarquee/>
        <About/>
        <Achievements />
        <Goals/>
        <ParallaxSection/>
        <Testimonials/>
        <CompanySection/>
        <WhatWeSell/>
        <SocialMedia/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;