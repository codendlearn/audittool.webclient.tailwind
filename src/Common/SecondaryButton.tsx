import React, { FC } from 'react'
import IButtonProps from '../Model/IButtonProps'

const SecondaryButton: FC<IButtonProps> = (props) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {props.text}
    </button>
  )
}

export default SecondaryButton
