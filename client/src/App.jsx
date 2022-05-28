import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';

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
      <div className='flex flex-col w-full pt-4 pb-24 pl-4 pr-4 items-center  justify-center max-w-xl'>
        <div className='w-full ml-4  '>
          <FeedbackForm feedback={feedback} />
          <FeedbackList feedback={feedback} />
        </div>
      </div>
    </div>
  );
};

export default App;
