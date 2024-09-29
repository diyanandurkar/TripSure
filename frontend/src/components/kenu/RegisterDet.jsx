import React, { useState } from 'react';
import './RegisterForTrip.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useForm } from "react-hook-form"


function RegistrationForm() {


 

  // const onSubmit = async (data) => {
  //   const userinfo = {
  //     firstName:data.firstName,
  //     lastname:data.lastname,
  //     phone:data.phone,
  //     email: data.email,
  //     travelDate:data.travelDate,
  //     numberOfMembers:data.numberOfMembers,
  //     aadharCardNumber:data.aadharCardNumber,
  //     additionalInfo:data.additionalInfo
  //   }
  //   await axios.post("http://localhost:4002/user/signup", userinfo)
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data) {
  //         Toast.success('register Successfull');
  //       }
  //       localStorage.setItem("Users", JSON.stringify(res.data.user));
  //     }).catch((err) => {
  //       if (err.response) {
  //         console.log(err);
  //         Toast.error("error:" + err.response.data.message);
  //       }
  //     })
  // };




  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    travelDate: '',
    numberOfMembers: '',
    aadharCardNumber: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData, "formData");
  // const validate = () => {
  //   const newError = {};
  //   if(!formData.firstName){
  //     newError.firstName='First name is required.';
  //   }

  //   setErrors(newError);
  //   return Object.keys(newError).length===0;
  // }

  const validate = () => {
    const newErrors = {};

    if (formData.firstName == '') {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }

    if (!formData.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Valid email is required.';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required.';
    }

    if (!formData.numberOfMembers) {
      newErrors.numberOfMembers = 'Number of members is required.';
    }

    if (!formData.aadharCardNumber || formData.aadharCardNumber.length !== 12) {
      newErrors.aadharCardNumber = 'Aadhar card number must be 12 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // You can send the formData to your backend here
    }
  };


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // You can send the formData to your backend here
  //   if(validate())
  //   {
  //     console.log('Form submitted:', formData);
  //   }
  // };

  return (
    <>

      <Navbar />


      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=' mt-20'>

          <div className="registration-form">
            <h1 className="item-center justify-center flex font-bold text-4xl ">Registration For  <span className=' text-red-700'>Trip</span> </h1>
            {/* <form onSubmit={handleSubmit} className="form-container"> */}
            <form className='' onSubmit={handleSubmit(onSubmit)}>

              <div className="form-group">



                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">First Name :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="Kenil"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>

              </div>



              <div className="form-group">

                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Last Name :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="Ladd"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>



              </div>
              <div className="form-group">


                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Phone Number :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      maxLength={10}
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="0123456789"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>


              <div className="form-group">


                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Email :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength={10}
                      value={formData.email}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="kenubeta01@gmail.com"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>

              <div className="form-group">

                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Travel Date (MM/DD/YYYY) :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder=""
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>

              <div className="form-group">

                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Number of Members :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="number"
                      id="numberOfMembers"
                      name="numberOfMembers"
                      value={formData.numberOfMembers}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="0"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>
              <div className="form-group">

                <label className=" items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto">Adhar Card Number :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="text"
                      id="aadharCardNumber"
                      name="aadharCardNumber"
                      maxLength={12}
                      value={formData.aadharCardNumber}
                      onChange={handleChange}
                      className="border-none grow mb-3"
                      placeholder="0000 1111 1111"
                      required
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>

              <div className=" form-group">

                <label className="items-center input input-bordered flex gap-1 justify-self-auto mt-10 mb-7 max-w-md mx-auto"> Additional Information  :

                  <label className="items-center flex  mt-10 mb-7 max-w-md">
                    <input
                      type="email"
                      id="additionalInfo"
                      name="additionalInfo"
                      maxLength={100}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className=" border-none grow mb-3"
                      placeholder="Your information"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                  </label>
                </label>
              </div>

              <div className="button-container">
                <Link to="/packdet">
                  <button className="submit-button bg-blue-500 hover:bg-orange-700 text-white cursor-pointer font-bold py-2 px-4 rounded mr-4"
                  >BACK</button> </Link>

                <button type="submit" className="submit-button bg-blue-500 hover:bg-orange-700 text-white  cursor-pointer font-bold py-2 px-4 rounded mr-4">SUBMIT</button>
                <button
                  type="reset"
                  className="submit-button bg-blue-500 hover:bg-orange-700 text-white  cursor-pointer font-bold py-2 px-4 rounded mr-4"
                >
                  RESET
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <Footer />
    </>

  );
}

export default RegistrationForm;