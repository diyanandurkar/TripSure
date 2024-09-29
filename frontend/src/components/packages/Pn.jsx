import React from 'react'
import list from '../../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../Product';

function Pn() {
    const filterData = list.filter((data) => data.p_type === "normaldeal");
    
    

    return (

        <>

         
            <div className='max-w-screen-2xl container mx-auto px-0 md:px-28'>

                <div className="scale-50 md:scale-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container item">
                    
                        {filterData.map((item) => (
                            <Product  key={item.p_id} item={item}/>
                        ))}
                    
                </div>

            </div>


        </>
    )
}

export default Pn