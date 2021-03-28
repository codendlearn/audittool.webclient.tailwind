import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Components/SideBar/Sidebar'
import Footer from './Components/Footer'

function App() {
  const [showSideBar, setShowSideBar] = useState(true)
  return (
    <div className='min-h-screen text-gray-700 flex bg-gray-300'>
      <Transition
        show={showSideBar}
        className='w-64 lg:w-72 flex'
        enter='transition-all ease-in-out duration-700 transform'
        enterFrom='-ml-64 lg:-ml-72'
        enterTo='ml-0'
        leave='transition-all ease-in-out duration-700 transform'
        leaveFrom='ml-0'
        leaveTo='-ml-64 lg:-ml-72'
      >
        <Sidebar />
      </Transition>
      <div className='flex flex-col justify-between w-full space-y-6'>
        <Header
          onSideBarToggle={() => {
            setShowSideBar(!showSideBar)
          }}
        />
        <main className='sm:px-6 lg:px-8'>Main</main>
        <Footer />
      </div>
    </div>
  )
}

export default App
