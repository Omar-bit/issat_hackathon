import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Recognize() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <form className='w-[60%] '>
      <div className=' p-3   w-full border-b border-gray-900/10 '>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Recognition
        </h2>
        <div className='flex gap-5 justify-center w-full'>
          <div className='col-span-full flex-1'>
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
          <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
            <div className='animate-pulse p-3 w-[80%] bg-gray-400 rounded-lg'></div>

            <div className='animate-pulse p-3 w-[80%] bg-gray-400 rounded-lg'></div>

            <div className=' animate-pulse p-3 w-[80%] bg-gray-400 rounded-lg'></div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-end gap-x-6'>
        {!isLoading && (
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Search
          </button>
        )}
        {isLoading && (
          <button
            type='submit'
            className=' flex gap-1 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {' '}
            <p>Searching..</p>
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

export default Recognize;
