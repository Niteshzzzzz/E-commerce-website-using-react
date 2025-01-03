import React from 'react'

function Nav() {
    return (
        <nav className='w-[18%] h-full bg-slate-200 flex items-center flex-col'>
            <a href="#" className='px-5 py-3 border rounded my-3 text-green-500 border-green-400 font-bold'>Add New Product</a>
            <hr className='w-[80%] mb-3' />
            <h1 className='w-[80%] text-xl mb-2'>Category Filter</h1>
            <ul className='w-[80%]'>
                <li className='flex items-center gap-3'><span className='inline-block bg-red-200 w-[15px] h-[15px] rounded-full'></span> cat 1</li>
                <li className='flex items-center gap-3'><span className='inline-block bg-green-300 w-[15px] h-[15px] rounded-full'></span> cat 1</li>
                <li className='flex items-center gap-3'><span className='inline-block bg-yellow-200 w-[15px] h-[15px] rounded-full'></span> cat 1</li>
            </ul>
        </nav>
    )
}

export default Nav