import React, { FC } from 'react'
import IButtonProps from '../Model/IButtonProps'

const CancelButton: FC<IButtonProps> = (props) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 border border-transparent border-red-600 rounded-md shadow-sm hover:text-gray-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {props.text}
    </button>
  )
}

export default CancelButton
