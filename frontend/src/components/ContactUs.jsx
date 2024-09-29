// import React from 'react'
// import Swal from 'sweetalert2'
// import Navbar from './Navbar'
// import Footer from './Footer';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form"


// function ContactUs() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },

//     } = useForm();

//     // const onSubmit = (data) => console.log(data);

//     const onSubmit = async (data) => {
//         data.preventDefault();
//         const formData = new FormData(data.target);

//         formData.append("access_key", "1382f7fa-c44a-4e2e-ac92-0458b94929b9");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         if (res.success) {
//             Swal.fire({
//                 title: "Message sent!",
//                 text: "We will contact you as soon as possible!",
//                 icon: "success"
//             });
//         }
//     };
//     return (
//         <>
//             <div className=''>
//                 <Navbar />

//                 {/* DIVIDER */}
//                 <div className="flex w-full flex-col mt-10">

//                     <div className="divider"></div>
//                 </div>
//                 <div className='mt-10 items-center justify-center text-center mb-16 font-bold'>


//                     {/* HEADER */}
//                     <div className='mt-15 mb-10 items-center justify-center text-center'>
//                         <h1 className='text-3xl md:text-5xl font-bold '>Contact <span className='text-red-700'>Us</span> </h1>
//                     </div>

//                     <form className='' onSubmit={handleSubmit(onSubmit)}>


//                         {/* USERNAME */}

//                         <label className="text-sm md:text-xl items-center input input-bordered flex gap-2 mt-3 lg:mt-5 mb-5 lg:mb-7 max-w-md mx-auto w-60 md:w-full">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                             </svg>
//                             <input name="name" type="text" className="grow border-none" placeholder="Fullname" {...register("username", { required: true })} />
//                             {errors.username && <span className='text-sm' >This field is required</span>}

//                         </label>


//                         {/* GMAIL */}

//                         <label className="text-sm md:text-xl items-center input input-bordered flex gap-2 mt-5 mb-7 max-w-md mx-auto w-60 md:w-full">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="h-4 w-4 opacity-70">
//                                 <path
//                                     d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                                 <path
//                                     d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                             </svg>
//                             <input name="gmail" type="text" className="border-none grow" placeholder="Email" {...register("email", { required: true })} />
//                             {errors.email && <span className='text-sm' >This field is required</span>}

//                         </label>


//                         {/* YOUR QUESTIONS */}

//                         <label className="text-sm md:text-xl items-center input input-bordered flex gap-2 mt-5 mb-7 max-w-md mx-auto w-60 md:w-full">

//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 -960 960 960"
//                                 fill="currentColor"
//                                 className="h-5 w-5 opacity-70 ">

//                                 <path d="M480-96v-96q-140.33 0-238.16-97.77-97.84-97.77-97.84-238Q144-668 241.89-766t238.29-98q70.2 0 131.01 26.5Q672-811 717.5-765.5t72 106.37Q816-598.27 816-528q0 69-29.5 134t-77 121Q662-217 602-171.5T480-96Zm72-128q80-60 136-139.5T744-528q0-109-77.5-186.5T480-792q-109 0-186.5 77.5T216-528q0 109 77.5 186.5T480-264h72v40Zm-72-112q16.59 0 28.29-11.71Q520-359.41 520-376t-11.71-28.29Q496.59-416 480-416t-28.29 11.71Q440-392.59 440-376t11.71 28.29Q463.41-336 480-336Zm-29-122h58q0-26 4-39.5t23-32.5q18-17 36-36t18-54q0-48-32-74t-78-26q-41.88 0-70.44 24Q381-672 370-640l52.33 22q4.67-17 18.16-32T480-665q27 0 39.5 15t12.5 32q0 21-14.5 35.5T486-552q-26 24-30.5 41.5T451-458Zm29-50Z" />
//                             </svg>
//                             <input name="message" type="text" className="h-24 grow border-none" placeholder="Your queries" {...register("questions", { required: true })} />
//                             {errors.questions && <span className='text-sm' >This field is required</span>}

//                         </label>
//                         <div className="flex justify-center items-center">


//                             <Link to="/bookinghelp">
//                                 <button className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
//                                 >BACK</button> </Link>

//                             <button type='submit' className='bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4'>
//                                 SUBMIT
//                             </button>
//                         </div>
//                         {/* BUTTON */}

//                     </form>

//                 </div>

//                 <Footer />
//             </div>
//         </>
//     )
// }

// export default ContactUs



import React from 'react';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            access_key: '1382f7fa-c44a-4e2e-ac92-0458b94929b9',
        };

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: 'Message sent!',
                text: 'We will contact you as soon as possible!',
                icon: 'success',
            });
            reset(); // Reset the form after submission
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
            });
        }
    };

    return (
        <>
            <div className="">
                <Navbar />
                <div className="flex w-full flex-col mt-10">
                    <div className="divider"></div>
                </div>
                <div className="mt-10 items-center justify-center text-center mb-16 font-bold">
                    <div className="mt-15 mb-10 items-center justify-center text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Contact <span className="text-red-700">Us</span>
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* USERNAME */}
                        <label className="text-sm md:text-xl items-center input input-bordered flex gap-2 mt-3 lg:mt-5 mb-5 lg:mb-7 max-w-md mx-auto w-60 md:w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                name="name"
                                type="text"
                                className="grow border-none"
                                placeholder="Fullname"
                                {...register('name', { required: 'Full name is required' })}
                            />
                        {errors.name && (
                            <p className=" text-red-500 text-xs mt-5 font-normal">{errors.name.message}</p>
                        )}
                        </label>

                        {/* EMAIL */}
                        <label className="text-sm md:text-xl items-center input input-bordered flex gap-2 mt-5 mb-7 max-w-md mx-auto w-60 md:w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                name="email"
                                type="text"
                                className="border-none grow"
                                placeholder="Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                            />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-5 font-normal">{errors.email.message}</p>
                        )}
                        </label>

                        {/* QUESTIONS */}
                        <label className=" md:text-xl items-center input input-bordered flex gap-2 mt-5 mb-7 max-w-md mx-auto w-60 md:w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70"
                            >
                                <path d="M480-96v-96q-140.33 0-238.16-97.77-97.84-97.77-97.84-238Q144-668 241.89-766t238.29-98q70.2 0 131.01 26.5Q672-811 717.5-765.5t72 106.37Q816-598.27 816-528q0 69-29.5 134t-77 121Q662-217 602-171.5T480-96Zm72-128q80-60 136-139.5T744-528q0-109-77.5-186.5T480-792q-109 0-186.5 77.5T216-528q0 109 77.5 186.5T480-264h72v40Zm-72-112q16.59 0 28.29-11.71Q520-359.41 520-376t-11.71-28.29Q496.59-416 480-416t-28.29 11.71Q440-392.59 440-376t11.71 28.29Q463.41-336 480-336Zm-29-122h58q0-26 4-39.5t23-32.5q18-17 36-36t18-54q0-48-32-74t-78-26q-41.88 0-70.44 24Q381-672 370-640l52.33 22q4.67-17 18.16-32T480-665q27 0 39.5 15t12.5 32q0 21-14.5 35.5T486-552q-26 24-30.5 41.5T451-458Zm29-50Z" />
                            </svg>
                            <input
                                name="message"
                                className="text-sm h-24 grow border-none"
                                placeholder="Your queries"
                                {...register('message', { required: 'Please enter your message' })}
                            ></input>
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-5 font-normal">{errors.message.message}</p>
                        )}
                        </label>

                        {/* BUTTONS */}
                        <div className="flex justify-center items-center">
                            <Link to="/bookinghelp">
                                <button className="submit-button bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4">
                                    BACK
                                </button>
                            </Link>

                            <button
                                type="submit"
                                className="submit-button bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ContactUs;
