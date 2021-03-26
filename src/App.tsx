import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  const [showSideBar, setShowSideBar] = useState(true)
  return (
    <div className='min-h-screen flex bg-gray-300'>
      <Transition
        show={showSideBar}
        className='w-60 flex'
        enter='transition ease-in-out duration-300 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >
        <Sidebar />
      </Transition>
      <div className='flex flex-col w-full space-y-6'>
        <Header />
        <main className=''>Main</main>
        <footer className=''>Footer</footer>

        <button
          onClick={() => {
            setShowSideBar(!showSideBar)
          }}
        >
          hide
        </button>
      </div>
    </div>
  )
}

export default App
