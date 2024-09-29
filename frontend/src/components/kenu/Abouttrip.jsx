import React from 'react';
import './Abouttrip.css'
import { Link } from 'react-router-dom';

function Abouttrip() {
  return (
    <div className=" para-container">
      <div className="section">
        <h2>Why Book Holidays with TripSure?</h2>
        <p>
          TripSure.com, India's leading online travel company, has a profound understanding of Indian
          consumers travel needs and preferences. It offers a wide range of holiday packages in India and across
          the world, catering to various segments of travellers. While the dynamic or customized tour and
          travel packages give consumers an option to create and design their own holiday, the fixed departure
          holiday packages have a pre-designed itinerary; thus ensuring there is something to meet the holiday
          needs of every kind of traveller.
        </p>
        <div className="questions">
          <div className="submit-button bg-blue-500 text-white left-question">
            <p>What type of holiday are you looking for?</p>
          </div>
          <div className="right-question">
            <p>How many people are traveling?</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>What does TripSure Holidays offer?</h2>
        <p>
          TripSure offers a hassle-free holiday wherein all your travel needs are taken care of. Be it your
          accommodation in comfortable hotels, convenient transfers, varied sightseeing options and an array
          of activities to choose from, delectable meals and niche experiences - the holiday packages are
          designed such to offer you an unparalleled experience. Be it popular destinations such as Andaman,
          Kerala, Rajasthan and Kashmir, or more offbeat ones like North East, Ladakh and Uttarakhand, there
          are tailor-made packages for destinations from all over India. From distinctive honeymoon packages
          to exclusive tour packages for women, from itineraries designed for solo travellers, families with kids
          and for those who are young at heart - TripSure has an answer to all our holiday needs.
        </p>
        <div className="questions">
          <div className="left-question">
            <p>What is your budget for the trip?</p>
          </div>
          <div className="right-question">
            <p>Do you have any specific preferences?</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>How to book Holidays with TripSure?</h2>
        <p>
          The user-friendly TripSure App and website make it easy for enthusiastic travellers to plan and
          book a holiday simply at the click of a button. Just use the filters and select the city you want to visit
          along with your travel dates, travel duration, specific preferences, if any, on hotels, kind of holiday, etc.
          and TripSure offers you an extensive list of holiday packages to choose from. Pick any package
          that meets your needs. Else, you could also choose hotels of your choice, add sightseeing and
          activities to your list and have a package ready that best suits your requirement. You can choose to
          book your tour packages offline by dropping a query or chatting with our travel experts for immediate
          support. With TripSure, planning and buying your ideal holiday has never been easier.
        </p>
      </div>

      <div className="section">
        <h2>The Ultimate Guide to Holidaying in India</h2>
        <p>
          India is a land of history and diversity. As a country that enjoys nature's bounty in the form of
          gorgeous beaches, majestic mountains, colourful deserts and lush forests, it has attracted tourists for
          centuries now. It's no wonder that India holiday packages are so popular among travellers today. So, if
          you are planning to spend your holidays in India, we have done the homework for you. To make your
          holidays unforgettable, read on to know more about this fascinating country! Plan your India tours to
          various exciting destinations in the country with ease.
        </p>
        <p>
          For a country as old as India, there is a place or a city for everyone. And almost all India holiday
          packages will give you a glimpse of this. For the spiritual traveller, there is Varanasi; for the offbeat
          adventurer, there is Ladakh, Arunachal Pradesh & more; If you are looking for some beach vibes, there
          are Goa and Lakshadweep. You can choose what you want from the vast list of India tour packages.
        </p>
        <p>
          So plan your holidays in India by booking incredible all India tour packages online. You can make the
          most out of your India tours by choosing holiday packages that are perfect for you.
        </p>
        <Link to={'/bookinghelp'}> 
             <button className="book-help submit-button bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4">Booking help</button>
        </Link>
        {/* <Link to="/au">
            <button className="bg-blue-500 hover:#a46f43 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
          >BACK</button> </Link> */}
      </div>
    </div>
  );
}
export default Abouttrip;