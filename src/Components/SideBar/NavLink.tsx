import { Transition, Menu } from '@headlessui/react'
import { BookOpenIcon, ChartBarIcon, HomeIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import INavLink from '../../Model/INavLink'

const iconmap = new Map([
  ['Home', <HomeIcon />],
  ['Dashboard', <ChartBarIcon />],
  ['BookOpen', <BookOpenIcon />],
])

export const NavLink: React.FC<INavLink> = (props) => {
  const menuRef = useRef<HTMLSpanElement>(null)
  const menuTargetRef = useRef<HTMLDivElement>(null)
  const [show, setshow] = useState(false)
  useEffect(() => {
    let curRef = menuRef.current
    if (menuRef.current) {
      document.body.addEventListener('click', (ev) => {
        setshow(false)
      })
      menuRef.current.addEventListener('contextmenu', (ev) => {
        ev.preventDefault()
        setshow(true)
        if (menuTargetRef.current && menuTargetRef.current.style) {
          menuTargetRef.current.style.left = ev.clientX + 'px'
          menuTargetRef.current.style.top = ev.clientY + 'px'
        }
      })
    }
    return () => {
      if (curRef) {
        curRef.removeEventListener('contextmenu', () => {})
      }
    }
  }, [])
  const [collapse, setcollapse] = useState(false)
  return (
    <>
      <span
        ref={menuRef}
        className={clsx(
          'flex items-center justify-between border-l-4 w-full border-transparent py-3 px-2 opacity-60 hover:opacity-100 cursor-pointer ',
          'focus: bg-gradient-to-r focus:from-gray-800 focus:to-gray-900  focus:border-gray-300',
          'hover: bg-gradient-to-r hover:from-gray-800 hover:to-gray-900  hover:border-gray-300',
          props.isSubMenu &&
            'ml-6 border-l border-dashed border-gray-100 border-opacity-50',
          props.active &&
            'bg-gradient-to-r from-gray-800 to-gray-900 bg-gray-800 border-gray-300'
        )}
      >
        <span
          className='flex'
          onClick={() => {
            setcollapse(!collapse)
          }}
        >
          <div className='w-6'>{iconmap.get(props.iconName ?? '')}</div>
          <div className='flex items-center justify-between mx-3 mr-6'>
            {show.toString()} <Link to={props.path ?? '/'}>{props.text}</Link>
          </div>
        </span>
      </span>
      <div
        ref={menuTargetRef}
        className={clsx('absolute transform-all duration-700')}
      >
        <Menu>
          <Transition
            show={show}
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
                  className='flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 opacity-50 cursor-not-allowed'
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
        </Menu>
      </div>
    </>
  )
}
