import { Menu, Transition } from '@headlessui/react'
import React from 'react'

const NotificationsMenu = () => {
  return (
    <div className='relative inline-block text-left'>
      <Menu>
        {({ open }) => (
          <>
            <span className='rounded-md shadow-sm'>
              <Menu.Button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none'>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                static
                className=' absolute right-0 w-96 mt-4 origin-top-right bg-gray-800 text-gray-300  divide-y divide-gray-700 rounded-md shadow-2xl outline-none container body-font'
              >
                <h2 className='tracking-widest text-md text-center font-bold p-2 title-font text-indigo-400'>
                  4 new notifications
                </h2>
                <div className='flex px-8 py-2 items-center opacity-70 hover:opacity-100  cursor-pointer'>
                  <Menu.Item>
                    <>
                      <div className='w-12 h-12 sm:mr-6 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-600 text-indigo-400 flex-shrink-0'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-6 h-6'
                          viewBox='0 0 24 24'
                        >
                          <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                        </svg>
                      </div>
                      <div className='flex-grow'>
                        <h2 className='text-white text-lg title-font font-medium mb-2'>
                          Shooting Stars
                        </h2>
                        <p className='leading-relaxed text-base'>
                          Blue bottle crucifix vinyl post-ironic four dollar .
                        </p>
                      </div>
                    </>
                  </Menu.Item>
                </div>
                <div className='flex px-8 py-2 items-center opacity-80 hover:opacity-100  cursor-pointer'>
                  <Menu.Item>
                    <>
                      <div className='w-12 h-12 sm:mr-6 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-600 text-indigo-400 flex-shrink-0'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-6 h-6'
                          viewBox='0 0 24 24'
                        >
                          <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                        </svg>
                      </div>
                      <div className='flex-grow'>
                        <h2 className='text-white text-lg title-font font-medium mb-2'>
                          Shooting Stars
                        </h2>
                        <p className='leading-relaxed text-base'>
                          Blue bottle crucifix vinyl post-ironic four dollar .
                        </p>
                      </div>
                    </>
                  </Menu.Item>
                </div>
                <div className='flex px-8 py-2 items-center opacity-80 hover:opacity-100  cursor-pointer'>
                  <Menu.Item>
                    <>
                      <div className='w-12 h-12 sm:mr-6 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-600 text-indigo-400 flex-shrink-0'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-6 h-6'
                          viewBox='0 0 24 24'
                        >
                          <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                        </svg>
                      </div>
                      <div className='flex-grow'>
                        <h2 className='text-white text-lg title-font font-medium mb-2'>
                          Shooting Stars
                        </h2>
                        <p className='leading-relaxed text-base'>
                          Blue bottle crucifix vinyl post-ironic four dollar .
                        </p>
                      </div>
                    </>
                  </Menu.Item>
                </div>
                <a
                  href='/#'
                  className='block hover:underline cursor-pointer tracking-widest text-md text-center p-3 title-font font-medium text-indigo-400 mb-1'
                >
                  see all notifications
                </a>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default NotificationsMenu
