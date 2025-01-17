import React from 'react'

const button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-300 rounded-full'>{name}</button>   
    </div>
  )
}

export default button