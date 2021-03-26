import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Components/Footer'

function App() {
  const [showSideBar, setShowSideBar] = useState(true)
  return (
    <div className='min-h-screen text-gray-700 flex bg-gray-300'>
      <Transition
        show={showSideBar}
        className='w-60 flex'
        enter='transition-all ease-in-out duration-700 transform'
        enterFrom='-ml-60'
        enterTo='ml-0'
        leave='transition-all ease-in-out duration-700 transform'
        leaveFrom='ml-0'
        leaveTo='-ml-60'
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
