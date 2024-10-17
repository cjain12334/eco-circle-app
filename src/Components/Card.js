import React from 'react'

function Card({ imgPath, title, desc, sz }) {
  return (
    <div className='w-64'>
        <div className='flex flex-col items-center justify-center border border-white bg-white bg-opacity-10 backdrop-blur-md rounded-lg w-64 h-64'>
            <div className='flex items-center justify-center h-48 mt-12'>
              <img src={imgPath} alt='xyz'/>
            </div>
            <p className='text-green-400 m-6 text-2xl'>{title}</p>
        </div>
        <div className='m-4'>
          <p className='text-center text-white'>{desc}</p>
        </div>
    </div>
  )
}

export default Card