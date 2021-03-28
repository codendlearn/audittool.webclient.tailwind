import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'
import { INavLinlProps } from '../../Model/INavLinlProps'

export const NavLinkWithSubMenu: React.FC<{
  title: string
  submenu: INavLinlProps[]
  active?: boolean
  icon?: ReactNode
}> = (props) => {
  const [collapse, setcollapse] = useState(false)

  return (
    <span
    // className={clsx(
    //   ' hover:bg-opacity-5 border-l-4 border-transparent py-2 px-2 opacity-60 hover:opacity-100 cursor-pointer',
    //   props.active && 'bg-gray-800 border-gray-300'
    // )}
    >
      <span
        className='flex'
        onClick={() => {
          setcollapse(!collapse)
        }}
      >
        <div
          className={clsx(
            'flex items-center bg-gradient-to-r from-gray-800 to-gray-900 justify-between border-l-4 w-full border-transparent py-2 px-2 opacity-60 hover:opacity-100 cursor-pointer',
            props.active && 'bg-gray-800 border-gray-300'
          )}
        >
          <div className='flex'>
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
            <span className='mx-3'>{props.title}</span>
          </div>
          <span className='w-6'>
            <svg
              className={clsx(
                'transform translate-all delay-100 duration-500',
                collapse && 'rotate-180'
              )}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width='16'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </span>
        </div>
      </span>
      {props.submenu && (
        <Transition
          className='overflow-hidden transition-all duration-500'
          show={collapse}
          enterFrom='max-h-0'
          enterTo='max-h-56'
          leaveFrom='max-h-56'
          leaveTo='max-h-0'
        >
          <ul className={'mt-2 space-y-2'}>
            {props.submenu.map((c) => (
              <li
                className={clsx(
                  'ml-12 opacity-60 hover:opacity-100  cursor-pointer',
                  c.active && 'text-blue-500'
                )}
              >
                <span className=''>{c.text}</span>
              </li>
            ))}
          </ul>
        </Transition>
      )}
    </span>
  )
}
