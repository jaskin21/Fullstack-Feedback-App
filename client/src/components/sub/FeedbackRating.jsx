import React, { useContext } from 'react';

import FeedbackContext from '../../context/FeedbackContext';

const FeedbackRating = ({ number }) => {
  const { setRating, rating } = useContext(FeedbackContext);

  const handleClick = (e) => {
    setRating(+e.currentTarget.value);
  };

  return (
    <li className='m-1'>
      <input
        // this input is display:none ; hidden in design index.css (@layer components)
        // className='m-2 mt-5  w-10 h-10 form-check-input appearance-none rounded-full  border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 hover:text-green-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        type='radio'
        id={`num${number}`}
        name='rating'
        value={`${number}`}
        onChange={handleClick}
        checked={rating === number}
      />
      <label
        className='m-0.2 justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer checked:bg-blue-600'
        htmlFor={`num${number}`}
      >
        {number}
      </label>
    </li>
  );
};

export default FeedbackRating;
