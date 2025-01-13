import React, { useContext, useState } from 'react'
import { productContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Create() {

    const [getProduct, setGetProduct] = useContext(productContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    
    const addNewProduct = (e) => {
        e.preventDefault()

        if(url.trim().length < 5 || title.trim().length < 5 || price.trim().length < 1 || category.trim().length < 5 || description.trim().length < 5){
            alert("Each and every field must have atleat 5 characters!")
            return;
        }

        const newProduct = {
            image: url, title, price: Number(price), category, description, id: crypto.randomUUID(), rating
            : {
                count: Math.floor(Math.random()*200),
                rate: Number((Math.random()*(5-1)+1).toFixed(1))
            }
        }
        setGetProduct([...getProduct, newProduct])
        localStorage.setItem('products', JSON.stringify([...getProduct, newProduct]))
        toast.success('Product added successfully')
        navigate('/')
    }

    return (
        <form action="" className='flex items-center m-auto w-[80%] flex-col'>
            <h1 className='text-4xl w-1/2 mb-6 font-bold'>Add New Product</h1>
            <input type="url" placeholder='Image url' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4' onChange={(e) => { setUrl(e.target.value) }} value={url} />
            <input type="text" placeholder='Title' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4' onChange={(e) => { setTitle(e.target.value) }} value={title} />
            <div className='flex justify-between w-1/2'>
                <input type="category" placeholder='Category' className='bg-zinc-200 p-3 w-[52%] outline-blue-400 rounded text-xl mb-4' onChange={(e) => { setCategory(e.target.value) }} value={category} />
                <input type="number" placeholder='Price' className='bg-zinc-200 p-3 w-[46%] outline-blue-400 rounded text-xl mb-4' onChange={(e) => { setPrice(e.target.value) }} value={price} />
            </div>
            <textarea placeholder='Enter product description here...' className='bg-zinc-200 p-3 w-1/2 outline-blue-400 rounded text-xl mb-4 h-[150px]' onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
            <div className="w-1/2">
                <button className='px-6 py-2 text-xl border rounded my-3 text-blue-800 border-blue-400 font-bold hover:bg-green-300' onClick={addNewProduct}>Add Product</button>
            </div>
        </form>
    )
}

export default Create