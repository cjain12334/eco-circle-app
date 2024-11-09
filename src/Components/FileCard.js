// used in e-waste page
import React from 'react'

function FileCard({heading, icon, desc, title, action, btnText}) {
  return (
    <div className='flex flex-col items-center justify-center w-96 border border-white rounded-lg bg-neutral-500 bg-opacity-70 py-2 px-10'>
      <p className='mt-2 text-3xl font-medium text-white text-center'>{heading}</p>
      <div className='m-4	flex justify-center py-2 border border-white rounded-xl w-full'>
        <img className='w-48' src={icon} alt='xyz'/>
        {desc !== undefined && <p className='text-white text-center'>{desc}</p>}
      </div>
      <p className='text-white text-lg'>{title}</p>
      <div className='w-full mt-6'>
        <p className='text-white text-medium text-xl'>{action}</p>
        <div className='mt-6 w-full h-0.5 bg-white bg-opacity-70 rounded-lg'></div>
      </div>
      <div className='mt-4 mb-4 w-full px-2'>
        <button className='text-white w-full py-1 bg-green-600 text-lg text-medium rounded-lg' onClick={() => {}}>{btnText}</button>
      </div>
    </div>
  )
}

export default FileCard