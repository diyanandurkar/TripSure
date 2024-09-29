import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Product from './Product';
import Footer from './Footer';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pb from './packages/Pb';
import ContactUs from './ContactUs';
import Pn from './packages/Pn';
import axios from 'axios';
import Abouttrip from './kenu/Abouttrip';

function Packages(item) {
  const [trip,settrip]=useState([])
  useEffect(()=>{
    const getbook= async()=>{
      try {
        const res = await axios.get("http://localhost:4002/trip");
        console.log(res.data)
        settrip(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  })



  return (
    <>
      <Navbar />


      <div className='bg-transparent max-w-screen-2xl container mx-auto md:px-0 px-4 '>



        <div className=' items-center justify-center text-center'>


          <h1 className='mt-20 text-3xl md:text-5xl font-bold '>All <span className='text-red-700'>Packges</span> </h1>

          <Pn />
          
        </div>
      </div>
      <Abouttrip/>

      <Footer />
    </>
  )
}

export default Packages