import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center bg-slate-300 min-h-screen '>
      <Header />
      <div className='flex flex-col w-full pt-4 pb-24 pl-4 pr-4 items-center  justify-center max-w-lg '>
        <div className='w-full ml-4  '>
          <div className='relative flex flex-col justify-between items-center mt-10 bg-white pt-10 pb-6 p-6 rounded-md text-black shadow-lg shadow-2xl'>
            <h1 className='w-full mb-10 font-bold'>About this project</h1>
            <p className='w-full'>This a Fullstack application.</p>
            <p className='w-full'>Web Technologies:</p>
            <h1>Mongo db</h1>
            <h1>Express</h1>
            <h1>React js</h1>
            <h1>Node js</h1>
            <Link
              to={'/'}
              className='px-6 py-2 text-sm mt-10 font-semibold text-blue-800 bg-blue-100'
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
