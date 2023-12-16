import React from 'react';
import palestine from '../assets/palestine.png';
function Footer() {
  return (
    <footer className='relative w-full bottom-0 z-0 bg-white '>
      <div className='text-center'>
        <a
          href='#'
          className='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 '
        >
          <img src={palestine} className='h-6 mr-3 sm:h-9' alt='' />
          Stay Strong
        </a>
        <p className='block text-3xl text-center text-gray-900 '>
          their end is near
        </p>
        <span className='block text-sm text-center text-gray-500 '>
          © 2023 issat hackathon. Distributed by{' '}
          <a href='#' className='text-purple-600 hover:underline '>
            Roudayna's Team
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
