import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Components/SideBar/Sidebar'
import Footer from './Components/Footer'
import clsx from 'clsx'
import MainContent from './Components/MainContent'

function App() {
  const [showSideBar, setShowSideBar] = useState(true)
  return (
    <div className='flex min-h-screen text-gray-800 bg-gray-100'>
      <Transition
        show={showSideBar}
        className={clsx(
          'hidden md:block w-72 lg:w-80',
          showSideBar && 'z-50 fixed h-screen md:sticky top-0',
          !showSideBar && 'hidden md:flex'
        )}
        enter='transition-all ease-in-out duration-700 transform'
        enterFrom='-ml-72 lg:-ml-80'
        enterTo='ml-0'
        leave='transition-all ease-in-out duration-700 transform'
        leaveFrom='ml-0'
        leaveTo='-ml-72 lg:-ml-80'
      >
        <Sidebar />
      </Transition>
      <div className='flex flex-col justify-between w-full'>
        <Transition
          show={showSideBar}
          className={clsx('fixed z-50 h-full w-screen top-0 block md:hidden')}
          enter='transition-all ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition-all ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <Sidebar
            close={() => {
              setShowSideBar(!setShowSideBar)
            }}
          />
        </Transition>
        <div className='flex flex-col justify-start flex-grow space-y-8'>
          <Header
            onSideBarToggle={() => {
              setShowSideBar(!showSideBar)
            }}
          />
          <main className='flex-grow h-full px-4 mx-4 text-xl border border-dashed lg:px-'>
            <MainContent />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
