import React from 'react';
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Pb from '../components/packages/Pb';

function Home() {
  return (
    <div className="bg-transparent container mx-auto p-4 md:p-8 lg:p-12 "> {/* added container class and padding */}
      <Navbar />
      <Slider />
      
      <div className="flex justify-center text-center mb-12 md:mb-20 lg:mb-24"> {/* added flexbox and margin bottom */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Best <span className="text-red-700">Packages</span></h1>
      </div>
      
      <Pb />
      
      <Footer />
    </div>
  );
}

export default Home;