import React from 'react';
import palestine from '../assets/palestine.png';
function Footer() {
  return (
    <footer className='relative w-full bottom-0 z-0 bg-white dark:bg-gray-900'>
      <div className='text-center'>
        <a
          href='#'
          className='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img src={palestine} className='h-6 mr-3 sm:h-9' alt='' />
          Stay Strong
        </a>
        <p className='block text-3xl text-center text-gray-900 dark:text-gray-500'>
          their end is near
        </p>
        <span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
          © 2023 issat hackathon. Distributed by{' '}
          <a
            href='#'
            className='text-purple-600 hover:underline dark:text-purple-500'
          >
            Team name
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;