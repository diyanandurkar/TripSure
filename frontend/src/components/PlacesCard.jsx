// import React from 'react'
// import bg3 from "../../public/bg3.jpeg"
// import { Link } from 'react-router-dom';
// import PlacePack from './PlacePack';


// function PlacesCard({ item }) {
//     console.log(item);
//     return (
//         <>

//             <div className="max-w-screen-2xl container mx-auto md:px-9 px-0 mt-0">

//                 <table>

//                     <tbody>
//                         <tr>

//                             <td>
//                                 <div className='cursor-pointer max-w-screen-xl  mx-auto md:px-0 mt-10 '>
//                                     <div className="w-[200px] h-[200px] card card-compact bg-base-200 shadow-md hover:scale-110 duration-300 transition-all ease-in-out">
//                                         <Link key={item.place_name} to="/placepackage"> <figure>
//                                             <img
//                                                 src={item.place_image}
//                                                 alt="Shoes" />
//                                         </figure>
//                                             <div className="card-body">
//                                                 <h2 className="card-title">{item.place_name}</h2>
//                                             </div>
//                                         </Link>

//                                     </div>
//                                 </div>

//                             </td>

//                         </tr>
//                     </tbody>

//                 </table>

//             </div>



//         </>
//     )
// }

// export default PlacesCard










// import React from 'react'
// import { Link } from 'react-router-dom';

// function PlacesCard({ item }) {
//     return (
//         <>
//             <div className="max-w-screen-2xl container mx-auto md:px-9 px-0 mt-0">
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <div className='cursor-pointer max-w-screen-xl mx-auto md:px-0 mt-10'>
//                                     <div className="w-[200px] h-[200px] card card-compact bg-base-200 shadow-md hover:scale-110 duration-300 transition-all ease-in-out">
//                                         <Link to={{
//                                             pathname: '/placepackage',
//                                             state: { place_name: item.place_name } // Passing the place_name in state
//                                         }}>
//                                             <figure>
//                                                 <img
//                                                     src={item.place_image}
//                                                     alt={item.place_name} />
//                                             </figure>
//                                             <div className="card-body">
//                                                 <h2 className="card-title">{item.place_name}</h2>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }

// export default PlacesCard;



import React from 'react'
import { Link } from 'react-router-dom';

function PlacesCard({ item }) {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-9 px-0 mt-0">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className='cursor-pointer max-w-screen-xl mx-auto md:px-0 mt-10'>
                                    <div className="w-[200px] h-[200px] card card-compact bg-base-200 shadow-md hover:scale-110 duration-300 transition-all ease-in-out">
                                        <Link to={{
                                            pathname: '/placepackage',
                                            state: { place_name: item.place_name } // Passing place_name
                                        }}>
                                            <figure>
                                                <img
                                                    src={item.place_image}
                                                    alt={item.place_name} />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{item.place_name}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlacesCard;
