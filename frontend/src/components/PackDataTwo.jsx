import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

function PackData({ item }) {
    // Check if the item is available
    if (!item) {
        return (
            <div>
                <Navbar />
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                    <div className='mt-28 text-center'>
                        <h2 className="text-2xl">Loading package details...</h2>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <div>
                        <a className='mx-0' href="/packages">Back</a>
                    </div>

                    <figure className="px-10 pt-10 w-100 h-75">
                        <img
                            src={item.p_image}
                            alt="loading.."
                            className="rounded-xl w-full h-full" />
                    </figure>

                    <h2 className="card-title font-bold">{item.p_name}</h2>

                    <div className="overflow-x-auto">
                        <table className="table table-borderd">
                            <thead>
                                <tr>
                                    <th><h1 className='text-2xl'>Karbi - 2 Days stay</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Day 1</th>
                                    <td>Check in to Avasea Resort Krabi - Holidays Selections, 4 Star</td>
                                    <td>Get cheapest forex delivered at your doorstep – powered by BookMyForex</td>
                                </tr>
                                <tr>
                                    <th>Day 2</th>
                                    <td>7 Islands Sunset Tour</td>
                                    <td>Day Meals: Breakfast : Included at Avasea Resort Krabi - Holidays Selections, Krabi</td>
                                </tr>
                                <tr>
                                    <th>Day 3</th>
                                    <td>Ferry Transfer from Ao Nang Krabi to Phuket</td>
                                    <td>Checkout from Hotel in Krabi</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Day Meals: Breakfast: Included at Avasea Resort Krabi</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='float-right'>
                            <h2 className="card-title font-bold">{item.p_name}</h2>
                            <p>{item.p_title}</p>
                            <p>Price - {item.p_price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary"><a href=''>Book Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PackData
