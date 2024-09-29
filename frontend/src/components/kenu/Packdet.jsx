import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import Navbar from '../Navbar';
import Summary from '../kenu/Summary';
import Footer from '../Footer';
import Packsli from '../kenu/Packsli';

function Packdet() {
  return (
    <>
    <div className=' bg-transparent max-w-screen-2xl container mx-auto md:px-20 px-4'>

      <Navbar />
      <br /> <br /><br /><br />
      <Packsli />
      <br /><br />
      <Summary />
      <br />
      <div>
        <Link to="/registerD">
          <button className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded">BOOK</button>
        </Link>

        <Link to="/packages">
          <button className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
          >BACK</button>
        </Link>
      </div>
      <br /><br />
      <Footer />
          </div>
    </>
  )
}

export default Packdet;