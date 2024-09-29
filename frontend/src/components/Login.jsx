import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Toast from 'react-hot-toast';




function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4002/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          Toast.success('Login Successfull');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          Toast.error("error:" + err.response.data.message);
        }
      })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex max-w-screen-2xl container mx-auto md:px-20 px-4">
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box mb-0">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>X</button>
              <h1 className='text-3xl md:text-5xl font-bold '>Log<span className='text-red-700'>In</span> </h1>
              <div className='mt-10 items-center justify-center text-center'>
                {/* EMAIL */}
                <label className="items-center input input-bordered flex gap-2 mt-10 mb-7 max-w-md mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                    />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                    />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    className="border-none font-bold grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className='text-red-500 text-xs font-normal' >This field is required</span>}
                </label>
                {/* PASSWORD */}
                <label className="items-center input input-bordered flex  gap-2 mt-1 mb-7 max-w-md mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    name="password"
                    className="border-none font-bold grow"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className='text-red-500 text-xs font-normal' >This field is required</span>}
                </label>
                {/* BUTTON */}
                <input
                  type="submit"
                  aria-label="Login"
                  className="btn mt-1 mb-7 text-xl font-bold  max-w-md "
                />
              </div>
            </div>
          </dialog>
        </div>
      </form>
    </>
  );
}

export default Login;