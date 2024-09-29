import React from 'react'
import Navbar from "../components/Navbar"
import Footer from './Footer'
import Login from './Login'
import { Link } from 'react-router-dom'; // Add this import
import { useForm } from "react-hook-form";
import axios from  'axios';
import Toast from 'react-hot-toast';





function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        
    } = useForm();

    const onSubmit = async (data) => {
        const userinfo={
            username:data.username,
            mobilenumber:data.mobilenumber,
            email:data.email,
            password:data.password,
            confirm:data.confirm
            }
            await axios.post("http://localhost:4002/user/signup",userinfo)
            .then((res)=>{
                console.log(res.data);
                if(res.data){
                    Toast.success('register Successfull');
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
            }).catch((err)=>{
                if(err.response){
                    console.log(err);
                    Toast.error("error:" + err.response.data.message);
                }
            })
    };

    return (

        <>

            <Navbar />


            <div className='mt-28 max-w-screen-2xl container mx-auto md:px-20 px-4'>


                <h1 className="font-bold text-3xl md:text-5xl mx-0 text-center">Register <span className='text-red-700'>Yourself</span></h1>





                <div className='mt-15 items-center justify-center text-center mb-16 font-bold'>

                    <form onSubmit={handleSubmit(onSubmit)} >


                        {/* USERNAME */}

                        <label className="items-center input input-bordered flex gap-2 mt-10 mb-7 max-w-md mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="border-none grow" placeholder="Username" {...register("username", { required: true })} />
                            {errors.username && <span className='font-normal text-red-500 text-xs mt-5"' >This field is required</span>}
                        </label>


                        {/* MOBILE NUMBER */}

                        <label className="items-center input input-bordered flex gap-2 mt-1 mb-7 max-w-md mx-auto">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70 ">

                                <path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
                            </svg>
                            <input type="text" className=" border-none grow" placeholder="Mobile number" {...register("mobilenumber", { required: true })} />
                            {errors.mobilenumber && <span className='font-normal text-red-500 text-xs mt-5"' >This field is required</span>}
                        </label>



                        {/* GMAIL */}

                        <label className="items-center input input-bordered flex gap-2 mt-6 mb-7 max-w-md mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="border-none grow" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className='font-normal text-red-500 text-xs mt-5"' >This field is required</span>}
                        </label>


                        {/* PASSWORD */}
                        <label className="items-center input input-bordered flex  gap-2 mt-1 mb-7 max-w-md mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="border-none grow" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className='font-normal text-red-500 text-xs mt-5"' >This field is required</span>}
                        </label>

                        {/* CONFIRM PASSWORD */}
                        <label className="items-center input input-bordered flex  gap-2 mt-1 mb-7 max-w-md mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="border-none grow" placeholder="Confirm password" {...register("confirm", { required: true })} />
                            {errors.confirm && <span className='font-normal text-red-500 text-xs mt-5"' >This field is required</span>}
                        </label>


                        <p className='mt-1 mb-3'>Alreay have an account?  <span className='text-md text-red-700 font-bold underline'>

                            <button to='' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                        </span></p>




                        {/* <button type="submit" className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded">Regitser</button>
                        
                        
                        <button className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
                        >Reset</button>
                            */}
                        {/* BUTTON */}
                        {/* <input type="submit" value="Register" className="btn mt-3 text-xl font-bold w-full max-w-md" /> */}
                        <div className='flex justify-center items-center'>

                        <button
                                type="reset"
                                className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
                                >
                                Reset
                            </button>   
                        <button
                                type="submit"
                                className="bg-blue-500 hover:bg-orange-700 text-white float-right cursor-pointer font-bold py-2 px-4 rounded mr-4"
                                >
                                Register
                            </button>

                                </div>
                    </form>


                </div>






            </div>

            <Login />

            <Footer />





        </>
    )
}

export default Register