import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState, ReactNode, FC } from 'react'

interface IModalProps {
  show: boolean
  title: string
  onClose: () => void
}

const Modal: FC<IModalProps> = (props) => {
  return (
    <Transition
      show={props.show}
      enter='transform duration-900'
      enterFrom='opacity-0'
      enterTo='opacity-100'
    >
      <div className={clsx(' w-full-h-full ')}>
        <div
          className='fixed inset-0 z-10 overflow-y-auto'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='flex text-center sm:block'>
            <div
              className='fixed inset-0 transition-opacity bg-gray-700 bg-opacity-75'
              aria-hidden='true'
            ></div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <div className='inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-gray-50 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='flex justify-between px-4 py-3 space-x-4 bg-gray-300 shadow sm:px-6'>
                <h4>{props.title}</h4>
                <button
                  onClick={() => {
                    props.onClose()
                  }}
                  className='w-8 hover:text-red-800'
                >
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {props.children}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Modal
