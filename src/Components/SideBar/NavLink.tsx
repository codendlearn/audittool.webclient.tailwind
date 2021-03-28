import clsx from 'clsx'
import React, { useState } from 'react'
import { INavLinlProps } from '../../Model/INavLinlProps'

export const NavLink: React.FC<INavLinlProps> = (props) => {
  const [collapse, setcollapse] = useState(false)

  return (
    <span
      className={clsx(
        ' opacity-60 hover:opacity-100 py-2 px-2 cursor-pointer border-l-4 border-transparent',
        props.active && 'bg-gray-800 border-gray-300'
      )}
    >
      <span
        className='flex'
        onClick={() => {
          setcollapse(!collapse)
        }}
      >
        <div className='w-6'>
          {props.icon || (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
          )}
        </div>
        <div className='mx-3 flex items-center justify-between mr-6'>
          {props.text}
        </div>
      </span>
    </span>
  )
}
