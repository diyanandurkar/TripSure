import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'
import PlacesCard from './PlacesCard';
import place from '../../public/place.json'

function Search(item) {
  const filterData = place.filter((data) => data.place_name !== "");
  console.log(item);
  console.log(item.place_name);
  return (
    <>

      <div className='max-w-screen-2xl container mx-auto md:px-0 px-0'>
          

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 container">
        {filterData.map((item) => (
          <PlacesCard key={item.place_name} item={item}  />
        ))}
      </div>
        </div>




    

    </>
  )
}

export default Search