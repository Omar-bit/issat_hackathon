import React from 'react';
import palestine from '../assets/palestine.png';
function Header() {
  return (
    <header className='fixed w-full'>
      <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
        <div className=' flex  items-center justify-center max-w-screen-xl px-4 mx-auto'>
          <a href='#' className='text-center flex items-center'>
            <img
              src={palestine}
              className='h-6 mr-3 sm:h-9'
              alt='Landwind Logo'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Name
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
