import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'

const Play = () => {
  const [collapse, setcollapse] = useState(false)
  const [collapse1, setcollapse1] = useState(false)
  return (
    <>
      <div className='px-5 bg-gray-400 min-h-screen'>
        <div className='w-64 min-h-screen text-gray-300 text-xl space bg-gray-800 flex flex-col'>
          <ul className='space-y-5 mt-5'>
            <li className=''>{collapse.toString()}</li>
            <li className=''>
              <span
                onClick={() => {
                  setcollapse(!collapse)
                }}
              >
                <div className='flex items-center justify-between mr-6'>
                  Collapse
                  <span className='w-6'>
                    <svg
                      className={clsx(
                        'transform translate-all duration-500',
                        collapse && 'rotate-180'
                      )}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      width='22'
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
              <Transition
                className='overflow-hidden transition-all duration-500'
                show={collapse}
                enterFrom='max-h-0'
                enterTo='max-h-56'
                leaveFrom='max-h-56'
                leaveTo='max-h-0'
              >
                <ul className={'mx-6'}>
                  <li>one</li>
                  <li>one</li>
                  <li>one</li>
                  <li>one</li>
                </ul>
              </Transition>
            </li>
            <li>one</li>
            <li>one</li>
          </ul>
        </div>
      </div>
      {/* <div className='bg-gray-300 mt-10 min-h-screen w-full'>
        <div className='flex flex-col bg-gray-800 text-gray-100 mx-auto w-44'>
          <div
            className='transition-all transform duration-500 border p-2'
            onClick={() => {
              setcollapse(!collapse)
            }}
          >
            one
            <Transition className='overflow-hidden' show={collapse}>
              <ul className='overflow-hidden px-10 space-y-3 transform transition-all'>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Test</li>
              </ul>
            </Transition>
          </div>

          <div
            className='transition-all transform duration-500 border'
            onClick={() => {
              setcollapse1(!collapse1)
            }}
          >
            one
            <Transition
              className='overflow-hidden'
              show={collapse1}
              enter='transition-all transform duration-500'
              enterFrom='opacity-0 -translate-y-10'
              enterTo='opacity-100 translate-y-0'
              leave='transition-all transform duration-500'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-10'
            >
              <ul className='overflow-hidden px-10 space-y-3 transform transition-all'>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Test</li>
              </ul>
            </Transition>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Play
