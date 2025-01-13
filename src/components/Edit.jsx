import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit() {
    const [getProduct, setGetProduct] = useContext(productContext)
    const navigate = useNavigate()
    const { id } = useParams()

    const [product, setproduct] = useState({
        image: '',
        title: '',
        category: '',
        price: '',
        description: ''
    })

    const changeHandler = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setproduct(getProduct.filter(p => p.id == id)[0])
    }, [id])

    const addNewProduct = (e) => {
        e.preventDefault()

        if (product.image.trim().length < 5 || product.title.trim().length < 5 || product.price.trim().length < 1 || product.category.trim().length < 5 || product.description.trim().length < 5) {
            alert("Each and every field must have atleat 5 characters!")
            return;
        }

        const pi = getProduct.findIndex(p => p.id == id)
        const copyData = [...getProduct]
        copyData[pi] = { ...getProduct[pi], ...product }

        setGetProduct(copyData)
        localStorage.setItem('products', JSON.stringify(copyData))
        toast.success('Product updated successfully')
        navigate(-1)
    }

    return (
        <form action="" className='flex items-center m-auto w-[80%] flex-col'>
            <h1 className='text-4xl w-1/2 mb-6 font-bold'>Edit Product</h1>
            <input type="url" placeholder='Image url' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4' name='image' onChange={changeHandler} value={product.image} />
            <input type="text" placeholder='Title' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4' name='title' onChange={changeHandler} value={product.title} />
            <div className='flex justify-between w-1/2'>
                <input type="category" placeholder='Category' className='bg-zinc-200 p-3 w-[52%] outline-blue-400 rounded text-xl mb-4' name='category' onChange={changeHandler} value={product.category} />
                <input type="number" placeholder='Price' className='bg-zinc-200 p-3 w-[46%] outline-blue-400 rounded text-xl mb-4' name='price' onChange={changeHandler} value={product.price} />
            </div>
            <textarea placeholder='Enter product description here...' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4 h-[150px]' name='description' onChange={changeHandler} value={product.description}></textarea>
            <div className="w-1/2">
                <button className='px-6 py-2 text-xl border rounded my-3 text-blue-800 border-blue-400 font-bold hover:bg-green-300' onClick={addNewProduct}>Update Product</button>
            </div>
        </form>
    )
}

export default Edit