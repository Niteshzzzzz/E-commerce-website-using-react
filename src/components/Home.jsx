import React from 'react'
import Nav from './Nav'

function Home() {
    return (
        <>
            <Nav/>
            <div className='w-[80%] h-screen p-8 pt-[4%] flex items-start flex-wrap gap-4 overflow-x-hidden overflow-y-auto'>
                <div className="card w-[200px] h-[35vh] border rounded shadow p-3 flex flex-col items-center">
                    <div className="w-full h-[70%] bg-contain bg-no-repeat bg-center hover:scale-105" style={{ backgroundImage: 'url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)' }}></div>
                    <h1 className='mt-2 hover:text-blue-400'>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
        </>
    )
}

export default Home