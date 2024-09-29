import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

function BookingHelp() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 '>

        <Navbar />
        <div className="md:mt-20 max-w-screen-2xl container mx-auto md:px-20 px-4">
          <section className="section">
            <h2>Booking Help</h2>
            <p>Need help with booking your travel package? We're here to assist you.</p>
            <div className="questions">
              <div className="left-question">
                <h3>Before You Book</h3>
                <p>What is the best time to book my travel package?</p>
                <p>How do I know which package is right for me?</p>
              </div>
              <div className="right-question">
                <h3>Booking Process</h3>
                <p>How do I book my travel package online?</p>
                <p>What payment methods do you accept?</p>
              </div>
            </div>
          </section>
          <section className="section">
            <h2>Get in Touch</h2>
            <p>Still have questions? Our support team is here to help.</p>
            <Link to={'/contact'}>
              <button className="submit-button bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4">CONTACT US</button>
            </Link>
            <Link to="/packages">
              <button className="submit-button bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
              >BACK</button> </Link>
          </section>

        </div>
      </div>
        <Footer />

    </>

  );
}

export default BookingHelp;