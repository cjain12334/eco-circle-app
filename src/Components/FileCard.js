import React from 'react'

function FileCard({heading, icon, desc, title, btnText}) {
  return (
    <div className='w-96 border border-white rounded-lg bg-white bg-opacity-10'>
      <p className='text-white text-center'>{heading}</p>
      <div className='m-8	flex justify-center p-8	border border-white rounded-xl bg-white bg-opacity-10'>
        <img className='w-48' src={icon} alt='xyz'/>
        {desc !== undefined && <p className='text-white text-center'>{desc}</p>}
      </div>
      <p className='text-white'>{title}</p>
      <button className='text-white' onClick={() => {}}>{btnText}</button>
    </div>
  )
}

export default FileCard