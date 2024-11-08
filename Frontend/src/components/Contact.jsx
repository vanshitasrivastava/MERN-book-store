import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Navbar from './Navbar';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
            <div id="my_modal_3" className="">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        < Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        {/* Name*/}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        {/* email */}
                        <div className="mt-4 space-y-2">
                            <span>  Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}

                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Message</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Type your message"
                                className="w-64 h-36 px-3 py-1 border rounded-md outline-none"
                                {...register("message", { required: true })}
                            />
                            <br />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        {/* button */}
                        <div className=' justify-around mt-4'>
                            <button className='bg-blue-500 text-white mt-3 px-3 py-1 rounded-md hover:to-blue-600'>Submit</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact