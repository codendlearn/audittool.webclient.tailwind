import React from 'react'
import PrimaryButton from '../Common/PrimaryButton'
import PrimaryButtonOutline from '../Common/PrimaryButtonOutline'
import SecondaryButton from '../Common/SecondaryButton'
import CancelButton from '../Common/CancelButton'

const NewEngagementForm = () => {
  return (
    <form>
      <div className=''>
        <div className='px-4 py-5 sm:p-6'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <input
                type='text'
                name='first_name'
                id='first_name'
                autoComplete='given-name'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last_name'
                className='block text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <input
                type='text'
                name='last_name'
                id='last_name'
                autoComplete='family-name'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='email_address'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <input
                type='text'
                name='email_address'
                id='email_address'
                autoComplete='email'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium text-gray-700'
              >
                Country / Region
              </label>
              <select
                id='country'
                name='country'
                autoComplete='country'
                className='block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className='sm:col-span-full'>
              <label
                htmlFor='street_address'
                className='block text-sm font-medium text-gray-700'
              >
                Street address
              </label>
              <input
                type='text'
                name='street_address'
                id='street_address'
                autoComplete='street-address'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-700'
              >
                City
              </label>
              <input
                type='text'
                name='city'
                id='city'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='state'
                className='block text-sm font-medium text-gray-700'
              >
                State / Province
              </label>
              <input
                type='text'
                name='state'
                id='state'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='postal_code'
                className='block text-sm font-medium text-gray-700'
              >
                ZIP / Postal
              </label>
              <input
                type='text'
                name='postal_code'
                id='postal_code'
                autoComplete='postal-code'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <fieldset className='col-span-full'>
              <legend className='text-base font-medium text-gray-900'>
                By Email
              </legend>
              <div className='flex mt-4'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-700'
                    >
                      Comments
                    </label>
                    <p className='text-gray-500'>
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='candidates'
                      name='candidates'
                      type='checkbox'
                      className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='candidates'
                      className='font-medium text-gray-700'
                    >
                      Candidates
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='offers'
                      name='offers'
                      type='checkbox'
                      className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='offers'
                      className='font-medium text-gray-700'
                    >
                      Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className='px-4 py-3 space-x-4 text-right bg-gray-300 shadow-lg sm:px-6'>
          {/* <button>Save Draft</button> */}
          <PrimaryButton text='Create' type='submit' />
          <PrimaryButtonOutline text='Create' type='submit' />
        </div>
      </div>
    </form>
  )
}

export default NewEngagementForm
