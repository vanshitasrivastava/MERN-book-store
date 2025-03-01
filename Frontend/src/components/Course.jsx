// import React from 'react'
import { useEffect, useState } from "react"
// import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axiosInstance from "../axiosInstance";
function Course(){
  const [book,setBook]=useState([]);
  useEffect(()=>{
     const getBook=async()=>{
      try {
      const result= await axiosInstance.get("/book");
      console.log(result.data);
      setBook(result.data);
      } catch (error) {
        console.log(error);
      }
     }
     getBook();
  },[])

  return (
   <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='mt-28 items-center justify-center text-center'>
        <h2 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here!:</span></h2>
        <p className='text-slate-600 mt-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit illo perferendis quidem voluptas corporis dignissimos hic obcaecati  Officia, rem debitis. Facere saepe laboriosam est doloremque obcaecati voluptatibus maxime reprehenderit voluptas. Ea sit reiciendis iste soluta dicta assumenda nam, expedita ad veritatis, eaque ab enim, dolore aspernatur!
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 px-4 py-2 text-white hover:bg-pink-700 rounded-md duration-300'>Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>
     </div>  
   </>
  )
}

export default Course