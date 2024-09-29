import React from 'react'
import bg3 from "../../public/bg3.jpeg"
import { Link } from 'react-router-dom'



function ProductTwo({ item }) {
    console.log(item)
    return (
        <>

            <div className=" max-w-screen-2xl container mx-auto md:px-0 px-4 md:scale-90">

                <table>
                    <tbody>
                        <tr>
                            <td>
        
                                <div className='max-w-screen-xl px-0 md:px-4 mt-0 md:mt-10 '>

                                    <div className="cursor-pointer card bg-base-200 w-full md:w-96 h-196 shadow-xl hover:scale-105 hover:bg-base-300 duration-300 transition-all ease-in-out">
                                        <figure className=" px-10 pt-10 w-76 h-25">
                                            <img
                                                src={item.p_image}
                                                alt="loading.."
                                                className="rounded-xl w-full h-full" />
                                        </figure>

                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title font-bold">{item.p_name}</h2>
                                            <p>{item.p_title}</p>
                                            <label>Price - {item.p_price}</label>
                                            <Link to='/packdet'>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Book Now</button>
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

export default ProductTwo