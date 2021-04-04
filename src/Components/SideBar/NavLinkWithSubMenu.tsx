import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'
import { NavLink } from '../SideBar/NavLink'
import INavLink from '../../Model/INavLink'

const NavLinkWithsubMenu: React.FC<INavLink> = (props) => {
  const [collapse, setcollapse] = useState(false)

  return (
    <>
      <span
        className='flex'
        onClick={() => {
          setcollapse(!collapse)
        }}
      >
        <div
          className={clsx(
            'flex items-center  justify-between border-l-4 w-full border-transparent py-3 px-2 opacity-60 hover:opacity-100 cursor-pointer',
            props.subMenu?.some((x) => x.active) &&
              'bg-gradient-to-r from-gray-800 to-gray-900 bg-gray-800 border-gray-300'
          )}
        >
          <div className='flex'>
            <div className='w-6'>
              {
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
              }
            </div>
            <span className='mx-3'>{props.text}</span>
          </div>
          <span className='w-6'>
            <ChevronDownIcon
              width={16}
              className={clsx(
                'transform translate-all delay-100 duration-500',
                collapse && 'rotate-180'
              )}
            />
          </span>
        </div>
      </span>
      {props.subMenu && (
        <Transition
          className='overflow-hidden transition-all duration-500 '
          show={collapse}
          enterFrom='max-h-0'
          enterTo='max-h-56'
          leaveFrom='max-h-56'
          leaveTo='max-h-0'
        >
          <div className='flex flex-col'>
            {props.subMenu.map((c) => (
              <NavLink {...c} />
            ))}
          </div>
        </Transition>
      )}
    </>
  )
}

export default NavLinkWithsubMenu
