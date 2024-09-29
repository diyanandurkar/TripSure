import React from 'react'
import Navbar from "./Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Footer from './Footer'
import OurInfo from './OurInfo';
import PackData from './PackData';
import ContactUs from './ContactUs';
import FakeAU from './FakeAU';
    

function AboutUs() {
    return (
        <>

            

            {/* HEADER */}
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-3xl md:text-5xl font-bold '>About <span className='text-red-700'>TripSure</span> </h1>

               
            </div>
            

            <FakeAU/>
            
            

            {/* <PackData/> */}

            

          

        </>
    )
}

export default AboutUs