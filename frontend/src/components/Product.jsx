import React from 'react'
import bg3 from "../../public/bg3.jpeg"
import { Link } from 'react-router-dom'



function Product({ item }) {
    console.log(item)
    return (
        <>

            <div className=" max-w-screen-2xl container mx-auto md:px-0 px-4 md:scale-90">

                <table>
                    <tbody>
                        <tr>
                            <td>

                                <div className='max-w-screen-xl px-0 sm:px-2 md:px-4 mt-0 md:mt-10'>
                                    <div className=" cursor-pointer card bg-base-200 shadow-xl hover:scale-105 hover:bg-base-300 duration-300 transition-all ease-in-out sm:scale-90 md:scale-100">
                                        <figure className="px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
                                            <img
                                                src={item.p_image}
                                                alt="loading.."
                                                className="rounded-xl w-full h-auto object-cover"
                                                style={{ height: "150px" }} // Smaller height for small devices
                                            />
                                        </figure>

                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title font-bold text-sm sm:text-base md:text-lg">{item.p_name}</h2>
                                            <p className="text-xs sm:text-sm md:text-base">{item.p_title}</p>
                                            <label className="text-xs sm:text-sm md:text-base">Price - {item.p_price}</label>
                                            <Link to='/packdet'>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary text-xs sm:text-sm md:text-base px-2 py-1 sm:px-4 sm:py-2">Book Now</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>





                            </td>
                        </tr>
                    </tbody>
                </table>




            </div>



        </>
    )
}

export default Product