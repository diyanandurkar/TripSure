import React, { useEffect, useState } from 'react';
import ProfileIcon from './profileWork/ProfileIcon';
import Login from './Login';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [activeTab, setActiveTab] = useState('/'); // Default active tab is the Home page ('/')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle tab clicks and set active state
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? 'sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out' : ''}`}>
            <div className="navbar">
                <div className="navbar-start">
                    {/* Logo */}
                    <div className="navbar-center">
                        <Link to="/" className="text-3xl md:text-5xl font-blod cursor-pointer">TripSure</Link>
                    </div>
                </div>

                <div className="navbar-center">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-bold">
                            <li><Link className="" to="/" >Home</Link></li>
                            <li><Link className="" to="/packages" >Packages</Link></li>
                            <li><Link className="" to="/places" >Places</Link></li>
                            <li><Link className="" to="/about" >About us</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="lg:hidden btm-nav">
                    <button onClick={() => handleTabClick('/')}>
                        <Link to="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className={`btm-nav-label ${activeTab === '/' ? 'active' : ''}`}>
                                Home
                            </span>
                        </Link>
                    </button>

                    <button onClick={() => handleTabClick('/packages')} className={activeTab === '/packages' ? 'active' : ''}>
                        <Link to="/packages">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="btm-nav-label">
                                Packages
                            </span>
                        </Link>
                    </button>

                    <button onClick={() => handleTabClick('/places')} className={activeTab === '/places' ? 'active' : ''}>
                        <Link to="/places">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="btm-nav-label">
                                Places
                            </span>
                        </Link>
                    </button>

                    <button onClick={() => handleTabClick('/about')} className={activeTab === '/about' ? 'active' : ''}>
                        <Link to="/about">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="btm-nav-label">
                                About us
                            </span>
                        </Link>
                    </button>
                </div>

                {/* Search Bar and Register */}
                <div className="navbar-end hidden lg:flex space-x-4">
                    <label className="input input-bordered flex items-center gap-1">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </label>
                    <button className="sm:hidden btn btn-outline btn-ghost btn-square text-xl">
                        <Link to="/register">Register</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
