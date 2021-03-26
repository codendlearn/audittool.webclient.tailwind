import React, { ReactNode } from 'react'

interface INavLinlProps {
  text: string
  component?: ReactNode
}
const NavLink: React.FC<INavLinlProps> = (props) => (
  <span className='bg-gradient-to-r hover:from-gray-600  hover:bg-opacity-5  opacity-60 hover:opacity-100 p-2 rounded-lg cursor-pointer'>
    {props.text}
  </span>
)

const Sidebar = (props: any) => {
  return (
    <div className='relative  shadow-lg w-60 max-w-4xl bg-gray-800 text-gray-100'>
      <h1 className='text-4xl py-2 align-middle text-center select-none'>
        Audit Tool
      </h1>
      <nav className='flex flex-col px-4 text-xl space-y-1 mt-12'>
        <NavLink text='Home' />
        <NavLink text='Dashboard' />
        <NavLink text='About' />
      </nav>
      <section className='xs:hidden opacity-75 absolute bottom-0 text-gray-400 body-font'>
        <div className='container p-2 flex flex-wrap'>
          <div className='flex rounded-lg h-full bg-gradient-to-r from-gray-900 to-gray-800  bg-opacity-60 p-8 flex-col'>
            <div className='flex items-center mb-3'>
              <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
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
              <h2 className='text-white text-lg title-font font-medium'>
                Shooting Stars
              </h2>
            </div>
            <div className='flex-grow'>
              <p className='leading-relaxed text-base'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className='mt-3 text-indigo-400 inline-flex items-center'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sidebar
