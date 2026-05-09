import React from 'react'

const CustomButton = ({width, height, type, text, handleClick}:ButtonProps) => {
  
  return (
    <div
    className='border p-1 rounded-xl'
    onClick={handleClick}>
       {text}
    </div>
  )
}

export default CustomButton;
