import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import UserProfile from './Components/UserProfile'
import NotificationsMenu from './Components/NotificationsMenu'
import ChatMenu from './Components/ChatMenu'

const Header = (props: any) => {
  const [showProfileMenu, setshowProfileMenu] = useState(false)
  const [showNotificationMenu, setshowNotificationMenu] = useState(false)

  useEffect(() => {
    if (showProfileMenu) setshowNotificationMenu(false)
    else {
      setshowProfileMenu(false)
    }
  }, [showProfileMenu, showNotificationMenu])

  return (
    <header className='shadow-md  sm:px-4 lg:px-6 bg-gray-200 body-font flex flex-wrap justify-between flex-row items-center'>
      <button
        className='py-3 focus:outline-none'
        onClick={() => {
          props.onSideBarToggle()
        }}
      >
        <svg
          className='w-8'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      <div className='ml-4 w-30'>
        <input
          type='text'
          id='full-name'
          placeholder='search'
          name='full-name'
          className='hidden md:inline w-44 rounded focus:border-opacity-10 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 bg-transparent outline-none leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>

      <nav className='md:ml-auto flex space-x-2 yarn flex-wrap items-center justify-center'>
        <ChatMenu />
        <NotificationsMenu />
        <UserProfile />
      </nav>
    </header>
  )
}

export default Header
