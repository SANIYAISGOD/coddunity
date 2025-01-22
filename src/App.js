import React from "react";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Navbar from "./components/Navbar";
import ContainerScroll from "./components/ContainerScroll"; 
import ScrollImage from "./assets/Scroll-image.png"; 
import { InfiniteTestimonials } from "./components/InfiniteTestimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="py-32"></div>
      <TrustedBy className="pt-20" />
      <ContainerScroll imageSrc={ScrollImage} /> 
      <InfiniteTestimonials />
      <Footer /> 
    </main>
  );
}

export default App;
