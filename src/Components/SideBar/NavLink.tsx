import { ChartBarIcon, HomeIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import INavLink from '../../Model/INavLink'

const iconmap = new Map([
  ['Home', <HomeIcon />],
  ['Dashboard', <ChartBarIcon />],
])

export const NavLink: React.FC<INavLink> = (props) => {
  const [collapse, setcollapse] = useState(false)
  console.log(props)
  return (
    <span
      className={clsx(
        'flex items-center  justify-between border-l-4 w-full border-transparent py-3 px-2 opacity-60 hover:opacity-100 cursor-pointer',
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
          <Link to={props.path ?? '/'}>{props.text}</Link>
        </div>
      </span>
    </span>
  )
}
