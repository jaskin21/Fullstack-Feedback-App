import React, { useState } from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackForm from '../components/FeedbackForm';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const App = () => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'jaskin', rating: 10 },
    { id: 2, text: 'renz', rating: 10 },
    {
      id: 3,
      text: 'feedback -between items-center mt-6-between items-center mt-6-beten items-center mt-6-between items-center mt-6-between items-center mt-6-between items-center mt-6',
      rating: 10,
    },
    {
      id: 4,
      text: 'fen items-center mt-6-between items-center mt-6-between items-center mt-6-between items-center mt-6',
      rating: 9,
    },
  ]);

  return (
    <div className='flex flex-col items-center bg-slate-300 min-h-screen '>
      <Header />
      <div className='flex flex-col w-full pt-4 pb-24 pl-4 pr-4 items-center  justify-center max-w-lg '>
        <div className='w-full ml-4  '>
          <FeedbackForm feedback={feedback} />
          <FeedbackList feedback={feedback} />
        </div>
      </div>
      <Link
        to={'/about'}
        className='fixed bottom-5 right-5 py-2 px-4 rounded-full text-lg font-bold  '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-11 w-11 rounded-full hover:bg-yellow-300 hover:h-12 hover:w-12'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </Link>
    </div>
  );
};

export default App;
