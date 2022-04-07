import React from 'react'

function HeaderItem({Icon, title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem