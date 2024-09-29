// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import list from '../../public/list.json';
// import ProductTwo from './ProductTwo';
// import Product from './Product';
// import {props } from React


// function PlacePack({ item }) {
//     console.log(item)
//     const filterData = list.filter((data) => data.p_place === "shimla");

//     return (
//         <>
//             <Navbar />

//             <div className='flex items-center justify-center'>

//                 <h1 className='text-3xl md:text-5xl font-bold mt-28'> {props.item.p_place}<span className='text-red-700'>Packages</span> </h1>
//             </div>
//             <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-screen-2xl container mx-auto md:px-20 px-4'>


//                 {filterData.map((item) => (
//                     <ProductTwo key={item.p_id} item={item} />
//                 ))}


//             </div>


//             <Footer />
//         </>
//     )
// }

// export default PlacePack


// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import list from '../../public/list.json';
// import { useLocation } from 'react-router-dom';


// import ProductTwo from './ProductTwo';

// function PlacePack({ item }) { // destructure the item prop from props
//   console.log(item)

//   const filterData = list.filter((data) => item.place_name === data.p_name)

//   const location = useLocation();

//   return (
//     <>
//       <Navbar />

//       <div className='flex items-center justify-center'>
//         <h1 className='text-3xl md:text-5xl font-bold mt-28'> {item.p_place}<span className='text-red-700'>Packages</span> </h1>
//       </div>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-screen-2xl container mx-auto md:px-20 px-4'>
//         {filterData.map((data) => (
//           <ProductTwo key={data.p_id} item={data} />
//         ))}
//       </div>

//       <Footer />
//     </>
//   )
// }

// export default PlacePack




// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import list from '../../public/list.json';
// import { useLocation } from 'react-router-dom';

// import ProductTwo from './ProductTwo';

// function PlacePack() {
//     // Get the place_name from useLocation
//     const location = useLocation();
//     const { place_name } = location.state || {};

//     // Filter the list based on place_name
//     const filterData = list.filter((data) => data.p_name === place_name);

//     return (
//         <>
//             <Navbar />

//             <div className='flex items-center justify-center'>
//                 <h1 className='text-3xl md:text-5xl font-bold mt-28'> {place_name}<span className='text-red-700'> Packages</span></h1>
//             </div>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-screen-2xl container mx-auto md:px-20 px-4'>
//                 {filterData.length > 0 ? (
//                     filterData.map((data) => (
//                         <ProductTwo key={data.p_id} item={data} />
//                     ))
//                 ) : (
//                     <p className='text-center text-xl'>No packages available for {place_name}.</p>
//                 )}
//             </div>

//             <Footer />
//         </>
//     );
// }

// export default PlacePack;




import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import list from '../../public/list.json';
import { useLocation } from 'react-router-dom';
import ProductTwo from './ProductTwo';

function PlacePack() {
    // Get the place_name from useLocation
    const location = useLocation();
    const { place_name } = location.state || {};

    // Filter the list based on place_name, matching with p_place
    const filterData = list.filter((data) => data.p_place === place_name);

    return (
        <>
            <Navbar />

            <div className='flex items-center justify-center'>
                <h1 className='text-3xl md:text-5xl font-bold mt-28'>
                    {place_name}
                    <span className='text-red-700'> Packages</span>
                </h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-screen-2xl container mx-auto md:px-20 px-4'>
                {filterData.length > 0 ? (
                    filterData.map((data) => (
                        <ProductTwo key={data.p_id} item={data} />
                    ))
                ) : (
                    <p className='text-center text-xl'>
                        No packages available for {place_name}.
                    </p>
                )}
            </div>

            <Footer />
        </>
    );
}

export default PlacePack;
