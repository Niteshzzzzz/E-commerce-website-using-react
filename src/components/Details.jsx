import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div className='w-[80%] m-auto flex items-center justify-center'>
      <div className="details flex items-center justify-evenly">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="image" className='w-[30%]' />
        <div className="contant w-[40%]">
          <h1 className='text-4xl mb-2'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
          <h3 className='text-xl text-slate-600 mb-1'>men's clothing</h3>
          <h2 className='text-2xl text-red-400 mb-2'>$ 109.95</h2>
          <p className='mb-8'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
          <Link className='px-5 py-2 border rounded my-3 text-green-500 border-green-400 font-bold mr-6'>Edit</Link>
          <Link className='px-5 py-2 border rounded my-3 text-red-500 border-red-400 font-bold'>Delete</Link>
        </div>
      </div>
    </div>
  )
}

export default Details