import React from 'react'
import { Link } from 'react-router-dom'

function Getstart() {
    return (
        <>


            <div
                className="hero min-h-screen"
                style={{
                    background: "url(https://gifdb.com/images/thumbnail/nyc-busy-street-cars-wu0nsosx9dobpczk.gif)",
                    backgroundSize: "cover"
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Tripsure</h1>
                        <p className="mb-5">Have a best packages with best deals and offers...Enjoy your TRAVEL with us.. <span className='text-red-700'>:)</span>
                        </p>
                    <Link to={'/home'}>  <button className="btn btn-primary">Get Started</button>
                    </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Getstart