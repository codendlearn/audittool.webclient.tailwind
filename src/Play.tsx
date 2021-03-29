import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import Modal from './Common/Modal'
import NewEngagementForm from './Components/NewEngagementForm'

const Play = () => {
  const [collapse, setcollapse] = useState(false)
  const [collapse1, setcollapse1] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setcollapse1(!collapse1)
        }}
        className='p-4 duration-1000 border border-blue-400 rounded-lg outline-none hover:bg-blue-500 bg-trnasparent focus:ring-2'
      >
        <span className=''>Open Modal {collapse1.toString()}</span>
      </button>

      <Modal
        title='New Engagement'
        onClose={() => {
          setcollapse1(false)
        }}
        show={collapse1}
      >
        <NewEngagementForm />
      </Modal>
    </>
  )
}

export default Play
