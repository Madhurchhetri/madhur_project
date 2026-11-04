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
        <section id="services" style={{ minHeight: "100vh", background: "#080408" }} />
        <section id="references" style={{ minHeight: "100vh", background: "#39001f" }} />
        <section id="about" style={{ minHeight: "100vh", background: "#080408" }} />
        <section id="resources" style={{ minHeight: "100vh", background: "#39001f" }} />
        <section id="contact" style={{ minHeight: "100vh", background: "#080408" }} />
      </main>
    </>
  );
}

export default App;