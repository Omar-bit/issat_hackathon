import React from 'react';
import Form from './Form';
function Content({ isUpload, setIsUpload }) {
  return (
    <div className='p-10 dark:bg-gray-900'>
      <ul className='flex items-stretch justify-center mt-4 font-medium gap-1 lg:space-x-8 lg:mt-0 w-full'>
        <li>
          <a
            onClick={() => setIsUpload((prev) => !prev)}
            className={`block p-2 text-purple-700  rounded lg:bg-transparent  dark:text-white cursor-pointer
                  ${isUpload ? 'border-2 border-purple-700 ' : ''}
                  `}
            aria-current='page'
          >
            Upload Informations
          </a>
        </li>
        <li>
          <a
            onClick={() => setIsUpload((prev) => !prev)}
            className={`block p-2 text-purple-700  rounded lg:bg-transparent dark:text-white cursor-pointer
                  ${!isUpload ? 'border-2 border-purple-700 ' : ''}
                  `}
            aria-current='page'
          >
            Recognize
          </a>
        </li>
      </ul>
      <div className='flex justify-center'>{isUpload ? <Form /> : null}</div>
    </div>
  );
}

export default Content;
