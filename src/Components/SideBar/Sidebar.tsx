import React, { useState } from 'react'

import { NavLink } from './NavLink'
import { NavMenu } from '../../Data/NavMenu'
import {
  ArrowRightIcon,
  EmojiHappyIcon,
  StarIcon,
  XIcon,
} from '@heroicons/react/outline'
import NavLinkWithSubMenu from './NavLinkWithSubMenu'

const Sidebar = (props: any) => {
  const [currentLink, setcurrentLink] = useState('Home')

  return (
    <aside className='z-50 flex flex-col justify-between w-full h-full overflow-x-hidden overflow-y-auto text-gray-400 transition-all transform bg-gray-900 shadow-lg'>
      <section>
        <div className='flex items-center justify-between p-4 mb-6'>
          <h1 className='text-2xl select-none'>Audit Tool</h1>
          {props.close && (
            <button onClick={() => props.close()} className='outline-none'>
              <XIcon width={26} />
            </button>
          )}
        </div>
        <nav className='flex flex-col'>
          {NavMenu.map((navM) => {
            if (navM.subMenu) return <NavLinkWithSubMenu {...navM} />
            else return <NavLink {...navM} />
          })}
        </nav>
      </section>
      <section className='mt-3 opacity-75 hover:opacity-95 xs:hidden body-font'>
        <span className='block w-full h-1 my-2 bg-gradient-to-r from-gray-400 to-gray-900 opacity-40' />
        {/* <hr className='m-3 opacity-40' /> */}
        <div className='container flex flex-wrap p-2'>
          <div className='flex flex-col h-full p-8 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-60'>
            <div className='flex items-center mb-3'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full'>
                <StarIcon width={24} />
              </div>
              <h2 className='text-lg font-medium title-font'>Shooting Stars</h2>
            </div>
            <div className='flex-grow'>
              <p className='text-base leading-relaxed'>
                Blue bottle post-ironic four dollar toast vegan taxidermy.
              </p>

              <button className='outline-none border border-indigo-400 rounded p-1.5 mt-3 hover:bg-indigo-500 text-indigo-400 hover:text-gray-100'>
                Learn More
                <ArrowRightIcon
                  className='inline ml-4 text-center'
                  width={16}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
