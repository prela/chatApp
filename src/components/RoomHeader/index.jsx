import React from 'react'

const RoomHeader = ({title}) => {
  return (
    <div className="relative pt-20">
      <div className="flex flex-row justify-stretch items-center h-10 w-full sticky top-16 backdrop-blur-md backdrop-opacity-60 shadow-sm">
        <h1 className='flex grow justify-center items-center text-xl font-semibold text-sky-500'>{title}</h1>
      </div>
    </div>
  )
}

export default RoomHeader