import { Menu, Transition } from '@headlessui/react'
import React from 'react'

const ChatMenu = () => {
  return (
    <div className='relative inline-block text-left'>
      <Menu>
        {({ open }) => (
          <>
            <span className='rounded-md shadow-sm'>
              <Menu.Button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none'>
                <span className='sr-only'>View notifications</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
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
                className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
              >
                <div className='px-4 py-3'>
                  <p className='text-sm leading-5'>Signed in as</p>
                  <p className='text-sm font-medium leading-5 text-gray-900 truncate'>
                    tom@example.com
                  </p>
                </div>

                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#account-settings'
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#support'
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    as='span'
                    disabled
                    className='flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50'
                  >
                    New feature (soon)
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#license'
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>

                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#sign-out'
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default ChatMenu
