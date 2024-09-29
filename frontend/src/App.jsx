

import React, {  } from 'react';
import Home from './home/Home';
import './index.css';
import Packages from './components/Packages';
import {Route, Routes } from "react-router-dom";
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Places from './components/Places'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import YourTrip from './components/YourTrip';
import ProfileIcon from './components/profileWork/ProfileIcon';
import EditProfile from './components/profileWork/EditProfile';
import FakeAU from './components/FakeAU';
import PackData from './components/PackData';
import MultipleImg from './components/MultipleImg';
import BookingHelp from './components/kenu/Bookinghelp';
import Packdet from './components/kenu/Packdet';
import RegisterDet from './components/kenu/RegisterDet'
import Getstart from './components/Getstart';
import ScrollToTop from './components/TopScroll/ScrollToTop';
import PlacePack from './components/PlacePack';
import { Toaster } from 'react-hot-toast';


function App() {

  
  return (
    <>
      <div className=" relative min-h-screen w-full bg-[url('/bg2.jpg')] bg-cover bg-fixed">
        {/* Overlay for darkening only the background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Main content */}
        <div className=" relative z-10 min-h-screen">
        
            <ScrollToTop/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/places' element={<Places />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/yourtrip' element={<YourTrip />} />
            <Route path='/profile' element={<ProfileIcon />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/packdata' element={<PackData />} />
            <Route path='/au' element={<FakeAU />} />
            <Route path='/multipleimg' element={<MultipleImg/>} />
            <Route path='/bookinghelp' element={<BookingHelp/>} />
            <Route path='/packdet' element={<Packdet/>} />
            <Route path='/registerD' element={<RegisterDet/>} />
            <Route path='/' element={<Getstart/>} />
            <Route path="/placepackage" element={<PlacePack/>}/>
          </Routes>
          <Toaster />
        
        </div>
      </div>
    </>
  );
}

export default App;
