import React from 'react'
import banner3 from '../../public/banner3.jpg'
import Navbar from '../components/Navbar'
import Footer from './Footer'

function YourTrip() {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div className='mt-28 items-center justify-center text-center'>


                    <h1 className='text-3xl md:text-5xl font-bold '>Your <span className='text-red-700'>Trips</span> </h1>



                </div>

                <div className="overflow-x-auto mt-20 items-center justify-center text-center h-50 w-full">

                    <table>
                        <tr>
                            <td>
                                <div>

                                    <img className='w-full' src={banner3} alt="" />
                                </div>
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit hic facere veniam. Impedit omnis voluptate, perferendis quae doloremque maxime, tenetur sit unde voluptas eos aspernatur quos provident eligendi veritatis obcaecati distinctio commodi porro dicta voluptatum necessitatibus minus expedita dolorum fugit quod? Doloremque corrupti delectus nihil! Tempora voluptatibus unde neque nesciunt perferendis odio nobis eligendi distinctio, optio deleniti reiciendis animi, culpa enim asperiores dicta eveniet suscipit autem commodi, modi quo velit cum ex? Natus cumque quidem magni ad unde labore laborum vitae veritatis fugiat consequuntur. Quas repudiandae est exercitationem, facilis vero odit ratione quae enim autem minus, nemo iusto? Quo, delectus.</td>
                        </tr>


                    </table>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default YourTrip