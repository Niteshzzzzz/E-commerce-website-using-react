import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'

function Details() {

  const [product, setProduct] = useState()
  const { id } = useParams()

  const getData = async () => {
    try {
      const { data } = await axios.get(`products/${id}`)
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { getData() }, [])

  return (product ?
    <div className='w-[80%] m-auto flex items-center justify-center'>
      <div className="details flex items-center justify-evenly">
        <img src={product.image} alt="image" className='w-[30%]' />
        <div className="contant w-[40%]">
          <h1 className='text-4xl mb-2'>{product.title}</h1>
          <h3 className='text-xl text-slate-600 mb-1'>{product.category}</h3>
          <h2 className='text-2xl text-red-400 mb-2'>$ {product.price}</h2>
          <p className='mb-8'>{product.description}</p>
          <Link className='px-5 py-2 border rounded my-3 text-green-500 border-green-400 font-bold mr-6'>Edit</Link>
          <Link className='px-5 py-2 border rounded my-3 text-red-500 border-red-400 font-bold'>Delete</Link>
        </div>
      </div>
    </div> : <Loading />
  )
}

export default Details