import React, { ReactNode } from 'react'

interface INavLinlProps {
  text: string
  component?: ReactNode
}
const NavLink: React.FC<INavLinlProps> = (props) => (
  <span className=' hover:bg-opacity-5  opacity-60 hover:opacity-100 cursor-pointer'>
    {props.text}
  </span>
)

const Sidebar = (props: any) => {
  return (
    <div className='relative border-r border-gray-200 border-opacity-10 shadow-lg w-60 max-w-4xl bg-gray-900 text-gray-400'>
      <h1 className='text-2xl p-4 select-none'>Audit Tool</h1>
      <nav className='flex flex-col mx-4 space-y-2 '>
        <NavLink text='Home' />
        <NavLink text='Dashboard' />
        <NavLink text='About' />
      </nav>
      <section className='hover:opacity-95 xs:hidden opacity-75 absolute bottom-0 body-font'>
        <div className='container p-2 flex flex-wrap'>
          <div className='flex rounded-lg h-full bg-gradient-to-r from-gray-800 to-gray-900  bg-opacity-60 p-8 flex-col'>
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
              <h2 className='text-lg title-font font-medium'>Shooting Stars</h2>
            </div>
            <div className='flex-grow'>
              <p className='leading-relaxed text-base'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className='mt-3 cursor-pointer text-indigo-400 inline-flex items-center'>
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
