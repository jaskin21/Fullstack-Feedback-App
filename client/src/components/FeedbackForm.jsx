import React, { useState } from 'react';

const FeedbackForm = ({ feedback }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // realtime input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Get the average rating
  const average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <form className='relative flex flex-col bg-white rounded-md py-4 px-2 justify-center shadow-lg pb-15'>
      <h3 className='text-xl mt-2 text-center font-semibold text-gray-600 break-normal'>
        How would you rate our service? We'd like to hear from you.
      </h3>
      <div className='mt-6 flex space-x-4 m-10 justify-center'>
        <input
          placeholder='Write a review'
          className='border-slate-600 bg-gray-100 rounded-md py-2 px-4 border-2 outline-none w-full'
          onChange={handleTextChange}
          value={text}
        />
        <button
          className={` ${
            btnDisabled ? 'opacity-50' : ''
          } bg-yellow-400 px-4 rounded-md font-semibold focus:outline-none`}
          disabled={btnDisabled}
        >
          Add
        </button>
      </div>
      {/* Feedback Statatistic */}
      <h1 className=' absolute bottom-0 left-0  font-bold  text-black rounded-md px-4 py-2 m-2  '>
        {feedback.length} Reviews
      </h1>
      <h1 className=' absolute bottom-0 right-0  font-bold  text-black rounded-md px-4 py-2 m-2  '>
        Average Rating: {(isNaN(average) ? 0 : average).toFixed(1)}
      </h1>
      {/*End of Feedback Statatistic */}
    </form>
  );
};

export default FeedbackForm;
