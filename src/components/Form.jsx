import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Form() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <form className=' '>
      <div className='space-y-12 md:flex md:gap-5 '>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Upload
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Lost Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  autoComplete='username'
                  className=' block flex-1 border w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                About
              </label>
              <div className='mt-2'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Write a few sentences that describes the person you loss.
              </p>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Photo
              </label>
              <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                <div className='text-center'>
                  <PhotoIcon
                    className='mx-auto h-12 w-12 text-gray-300'
                    aria-hidden='true'
                  />
                  <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                    >
                      <span>Upload a file</span>
                      <input
                        id='file-upload'
                        name='file-upload'
                        type='file'
                        className='sr-only'
                      />
                    </label>
                    <p className='pl-1'>or drag and drop</p>
                  </div>
                  <p className='text-xs leading-5 text-gray-600'>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4 w-full'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2 w-full'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='tel'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Phone number
              </label>
              <div className='mt-2'>
                <input
                  id='tel'
                  name='tel'
                  type='tel'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3 w-full '>
              <label
                htmlFor='gender'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Gender
              </label>
              <div className='mt-2 w-full'>
                <select
                  id='gender'
                  name='gender'
                  autoComplete='gender-name'
                  className='block w-[100%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>Female</option>
                  <option>Male</option>
                  <option>Taffeli</option>
                  <option>Non Binary</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-end gap-x-6'>
        {!isLoading && (
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Upload
          </button>
        )}
        {isLoading && (
          <button
            type='submit'
            className=' flex gap-1 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {' '}
            <p>Uploading..</p>
            <div
              className='inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
              role='status'
            ></div>
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
