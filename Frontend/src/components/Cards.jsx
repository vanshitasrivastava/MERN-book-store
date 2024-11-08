import React from 'react'
import image from '/Book.jpg'

const Cards = ({ item }) => {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card w-80 bg-base-100 shadow-xl z-40 space-x-4 hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className='cursor-pointer badge badge-outline'>${item.price}</div>
              <div className='cursor-pointer px-2 py-1 rounded-full border-fuchsia-300 border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200 '>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards