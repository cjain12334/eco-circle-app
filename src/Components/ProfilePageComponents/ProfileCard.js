import React from 'react'

function ProfileCard({ image, name }) {
  return (
    <div className='flex items-center gap-x-4'>
        <img src={image} alt={name} className='w-12 h-12 rounded-lg' />
        <p className='text-green-500 text-2xl font-bold'>{name}</p>
    </div>
  )
}

export default ProfileCard