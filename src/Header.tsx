import React from 'react'

const Header = () => {
  return (
    <header className='text-gray-800 body-font container mx-auto flex flex-wrap p-2 flex-row items-center'>
      <button className=''>
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

      <div className='relative sm:mb-0 flex-grow w-30'>
        <input
          type='text'
          id='full-name'
          placeholder='search'
          name='full-name'
          className='hidden md:inline w-44 rounded focus:border-opacity-10 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 bg-transparent text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>

      <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
        <a className='mr-5 hover:text-white'>Second Link</a>
        <a className='mr-5 hover:text-white'>Third Link</a>
        <a className='mr-5 hover:text-white'>Fourth Link</a>
      </nav>
      <button className=''>
        <svg
          className='w-8 '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </header>
  )
}

export default Header
