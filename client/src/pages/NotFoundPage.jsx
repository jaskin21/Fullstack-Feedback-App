import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-300 min-h-screen '>
      <Header />
      <div className='flex flex-col w-full pt-4 pb-24 pl-4 pr-4 items-center  justify-center max-w-lg '>
        <div className='w-full ml-4  '>
          <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold text-blue-600 text-9xl'>404</h1>

              <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
                <span className='text-red-500'>Oops!</span> Page not found
              </h6>

              <p className='mb-8 text-center text-gray-500 md:text-lg'>
                The page you’re looking for doesn’t exist.
              </p>

              <Link
                to={'/'}
                class='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
