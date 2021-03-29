import React, { useState } from 'react'

import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Dashboard from '../../Pages/Dashboard'
import { NavLink } from './NavLink'
import { NavLinkWithSubMenu } from './NavLinkWithSubMenu'
import Play from '../../Play'

const Sidebar = (props: any) => {
  const [currentLink, setcurrentLink] = useState('Home')

  return (
    <aside className='z-50 flex flex-col justify-between w-full h-full overflow-x-hidden overflow-y-auto text-gray-400 transition-all transform bg-gray-900 shadow-lg'>
      <section>
        <div className='flex items-center justify-between p-4 mb-6'>
          <h1 className='text-2xl select-none'>Audit Tool</h1>
          {props.close && (
            <button onClick={() => props.close()} className='outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                width='26'
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
          )}
        </div>
        <nav className='flex flex-col'>
          <NavLink
            icon={
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
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            }
            text='Home'
            path='/home'
            component={Home}
          />
          <NavLink
            icon={
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
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            }
            text='Dashboard'
            path='/dashboard'
            component={Dashboard}
          />
          <NavLinkWithSubMenu
            title='Phases'
            icon={
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
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            }
            submenu={[
              {
                text: 'Phase 1',
                path: '/phase1',
                active: true,
                component: { Home },
              },
              { text: 'Phase 3', path: '/phase1', component: { Home } },
              { text: 'Phase 2', path: '/phase1', component: { Home } },
            ]}
          />
          <NavLinkWithSubMenu
            title='Phases'
            icon={
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
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            }
            submenu={[
              {
                text: 'Phase 1',
                path: '/phase1',
                active: true,
                component: { Home },
              },
              { text: 'Phase 3', path: '/phase1', component: { Home } },
              { text: 'Phase 2', path: '/phase1', component: { Home } },
            ]}
          />
          <NavLinkWithSubMenu
            title='Phases'
            icon={
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
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            }
            submenu={[
              {
                text: 'Phase 1',
                path: '/phase1',
                active: true,
                component: { Home },
              },
              { text: 'Phase 3', path: '/phase1', component: { Home } },
              { text: 'Phase 2', path: '/phase1', component: { Home } },
            ]}
          />
          <NavLinkWithSubMenu
            title='Phases'
            icon={
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
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            }
            submenu={[
              {
                text: 'Phase 1',
                path: '/phase1',
                active: false,
                component: { Home },
              },
              { text: 'Phase 3', path: '/phase1', component: { Home } },
              { text: 'Phase 2', path: '/phase1', component: { Home } },
            ]}
          />
          <NavLink
            icon={
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
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
            active={false}
            text='About'
            path='/about'
            component={About}
          />
          <NavLink
            icon={
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
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
            active={false}
            text='Play'
            path='/play'
            component={Play}
          />
        </nav>
      </section>
      <section className='mt-3 opacity-75 hover:opacity-95 xs:hidden body-font'>
        <span className='block w-full h-1 my-2 bg-gradient-to-r from-gray-400 to-gray-900 opacity-40' />
        {/* <hr className='m-3 opacity-40' /> */}
        <div className='container flex flex-wrap p-2'>
          <div className='flex flex-col h-full p-8 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-60'>
            <div className='flex items-center mb-3'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <h2 className='text-lg font-medium title-font'>Shooting Stars</h2>
            </div>
            <div className='flex-grow'>
              <p className='text-base leading-relaxed'>
                Blue bottle post-ironic four dollar toast vegan taxidermy.
              </p>

              <button className='outline-none border border-indigo-400 rounded p-1.5 mt-3 hover:bg-indigo-500 text-indigo-400 hover:text-gray-100'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='inline-block w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
