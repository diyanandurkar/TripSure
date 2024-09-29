import React from 'react'
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import place from "../../public/place.json"
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlacesCard from "./PlacesCard";
import Footer from './Footer';
import Search from './Search';
import ContactUs from './ContactUs'

function Packages(item) {



  return (
    <>
      <Navbar />


      <div className='bg-transparent max-w-screen-2xl container mx-auto md:px-0 px-2'>



        <div className='mt-28 items-center justify-center text-center '>
          <h1 className='text-3xl md:text-5xl font-bold  '>Places all over <span className='text-red-700'>India</span> </h1>
          <Search />

        </div>
      </div>

      

      <ContactUs />
      {/* <Footer /> */}
    </>
  )
}

export default Packages