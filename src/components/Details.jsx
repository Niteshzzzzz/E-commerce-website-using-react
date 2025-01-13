import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { productContext } from '../utils/Context'
import { toast } from 'react-toastify'

function Details() {

  const [getProduct, setGetProduct] = useContext(productContext)
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get(`products/${id}`)
  //     setProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const deleteHandler = (id) => {
    const filteredProduct = getProduct.filter(p => p.id != id)
    setGetProduct(filteredProduct)
    localStorage.setItem('products', JSON.stringify(filteredProduct))
    toast.success('Product deleted successfully')
    navigate('/')
  }

  const rating = () => {
    let rate = []
    for (let i = 0; i < 5; i++) {
      rate[i] = <FontAwesomeIcon icon={faStar} key={i} className={`text-${(i < product.rating.rate.toFixed()) ? 'yellow' : 'slate'}-400`} />
    }
    return rate
  }

  useEffect(() => {
    //  getData()
    if (!product) {
      setProduct(getProduct.filter(p => p.id == id)[0])
    }
  }, [])

  return (product ?
    <div className='w-[80%] m-auto flex items-center justify-center'>
      <div className="details flex items-center justify-evenly">
        <img src={product.image} alt="image" className='w-[30%]' />
        <div className="contant w-[40%]">
          <h1 className='text-4xl mb-2'>{product.title}</h1>
          <h3 className='text-xl text-slate-600 mb-1'>{product.category}</h3>
          <h2 className='text-2xl text-red-400 mb-2'>$ {product.price}</h2>
          <p className='mb-2'>{product.description}</p>
          <div className="rating mb-8 text-2xl">
            <span>
              {rating()}
            </span>
          </div>
          <Link to={`/edit/${id}`} className='px-5 py-2 border rounded my-3 text-green-500 border-green-400 font-bold mr-6'>Edit</Link>
          <button onClick={() => deleteHandler(id)} className='px-5 py-2 border rounded my-3 text-red-500 border-red-400 font-bold'>Delete</button>
        </div>
      </div>
    </div> : <Loading />
  )
}

export default Details