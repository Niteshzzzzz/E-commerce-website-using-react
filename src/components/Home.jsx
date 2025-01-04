import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'

function Home() {
    const [getProduct] = useContext(productContext)
    // console.log(getProduct)
    return getProduct ? (
        <>
            <Nav />
            <div className='w-[80%] h-screen p-8 pt-[4%] flex items-start flex-wrap gap-4 overflow-x-hidden overflow-y-auto'>
                {getProduct.map(product => (
                    <Link key={product.id} to={`/details/${product.id}`} className="card w-[200px] h-[35vh] border rounded shadow p-3 flex flex-col items-center">
                        <div className="w-full h-[70%] bg-contain bg-no-repeat bg-center hover:scale-105" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <h1 className='mt-2 hover:text-blue-400'>{product.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    ) : (<Loading />)
}

export default Home