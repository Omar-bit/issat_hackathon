import React from 'react';
import Form from './Form';
import Recognize from './Recognize';
function Content({ isUpload, setIsUpload }) {
  return (
    <div className='p-10 '>
      <ul className='flex items-stretch justify-center mt-4 font-medium gap-1 lg:space-x-8 lg:mt-0 w-full mb-3'>
        <li>
          <a
            onClick={() => setIsUpload((prev) => !prev)}
            className={`block p-2 text-purple-700  rounded lg:bg-transparent   cursor-pointer
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
            className={`block p-2 text-purple-700  rounded lg:bg-transparent  cursor-pointer
                  ${!isUpload ? 'border-2 border-purple-700 ' : ''}
                  `}
            aria-current='page'
          >
            Recognize
          </a>
        </li>
      </ul>
      <div className='flex justify-center'>
        {isUpload ? <Form /> : <Recognize />}
      </div>
    </div>
  );
}

export default Content;
