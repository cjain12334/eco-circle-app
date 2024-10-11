import React from 'react'

function Card({ imgPath, title, desc, sz }) {
  return (
    <div className='w-48'>
        <div className='flex flex-col items-center border border-white rounded-sm bg-white bg-opacity-10 backdrop-blur-md p-2'>
            <img src={imgPath} alt='xyz' />
            <p className='text-green-400'>{title}</p>
        </div>
        <div>
        <p className='text-center text-white'>{desc}</p>
        </div>
    </div>
  )
}

export default Card