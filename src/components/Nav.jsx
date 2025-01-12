import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../utils/Context'

function Nav() {

    const [getProduct] = useContext(productContext)
    let filtered_Product = getProduct.reduce((acc, cv) => [...acc, cv.category], [])
    filtered_Product = [...new Set(filtered_Product)]
    
    const getColor = () => {
        return `rgba(${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))}, 0.5)`
    }

    return (
        <nav className='w-[18%] h-full bg-slate-200 flex items-center flex-col'>
            <Link to={'/create'} className='px-5 py-3 border rounded my-3 text-green-500 border-green-400 font-bold'>Add New Product</Link>
            <hr className='w-[80%] mb-3' />
            <h1 className='w-[80%] text-xl mb-2'>Category Filter</h1>
            <div className='w-[80%] pt-2'>
                {filtered_Product.map((c, i) =>
                    <Link to={`/?category=${c}`} key={i} className='flex items-center gap-3 mb-2 hover:text-blue-600'><span className='inline-block w-[15px] h-[15px] rounded-full' style={{backgroundColor: getColor()}}></span>{c}</Link>
                )}
            </div>
        </nav>
    )
}

export default Nav