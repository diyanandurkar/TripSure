import React from 'react'
import Navbar from '../components/Navbar'
import bg1 from "../../public/bg1.jpg"
import Footer from './Footer'
import ContactUs from './ContactUs'
import MultipleImg from './MultipleImg'

function PackData() {
    // console.log(item)

    return (
        <>

            <Navbar />

            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div className='mt-20 items-center justify-center text-center'>


                    {/* <h1 className='text-5xl font-bold '>Packge <span className='text-red-700'>Details</span> </h1> */}
                    <div>

                        <a className='mx-0 m-0 p-0 float-right' href="/packages"><span>Back</span></a>

                    </div>

                    <figure className=" px-10 pt-10 w-full h-50 md:h-50">
                        <div>

                        {/* <img
                            src="bg1.jpg"
                            alt="loading.."
                            className="rounded-xl w-full h-full" /> */}

                                <MultipleImg/>

                            </div>
                    </figure>
                    <div className=" overflow-x-auto">
                                    <h1 className="card-title p-2 font-bold text-4xl">{ }cascas</h1>
                                         <h1 className='p-2 text-2xl'>Karbi - 2 Days stay</h1>
                        <table className="text-sm  md:text-md  table table-borderd">
                            {/* head */}
                            <thead className='w-full text-center'>
                               
                            </thead>
                            <tbody >
                                {/* row 1 */}
                                <tr >
                                    <th >Day 1</th>
                                    <td>Check in to Avasea Resort Krabi - Holidays Selections, 4 Star</td>
                                    <td>Get cheapest forex delivered at your doorstep – powered by BookMyForex</td>

                                </tr>

                                {/* row 2 */}
                                <tr>
                                    <th>Day 2</th>
                                    <td>7 Islands Sunset Tour</td>
                                    <td>Day Meals: Breakfast : Included at Avasea Resort Krabi - Holidays Selections , Krabi</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Day 3</th>
                                    <td>Ferry Transfer from Ao Nang Krabi (Nopparat Thara Pier) to Phuket (Rassada Pier)</td>
                                    <td>Checkout from Hotel in Krabi</td>


                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Day Meals: Breakfast : Included at Avasea Resort Krabi - Holidays Selections , Krabi</td>
                                </tr>


                            </tbody>
                        </table>
                        <div className='float-right'>

                            <h2 className="card-title font-bold">{ }</h2>
                            <p>{ }</p>
                            <p>Price - { }</p>
                            <div className="card-actions">
                                <button className="btn btn-primary"><a href='#'>Book Now</a></button>
                            </div>

                        </div>
                    </div>


                </div>

            </div>


            <ContactUs/>
            <Footer />

        </>
    )
}

export default PackData