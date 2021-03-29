import React, { FC } from 'react'
import IButtonProps from '../Model/IButtonProps'

const PrimaryButtonOutline: FC<IButtonProps> = (props) => {
  return (
    <button
      {...props}
      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 border border-blue-700 rounded-md shadow-sm hover:text-gray-300 hover:text-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {props.text}
    </button>
  )
}

export default PrimaryButtonOutline
