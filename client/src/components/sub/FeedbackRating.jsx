import React, { useState } from 'react';

const FeedbackRating = ({ number }) => {
  const [selected, setSelected] = useState();

  const handleClick = (e) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <li>
      <input
        className='m-2 mt-5  w-10 h-10 form-check-input appearance-none rounded-full  border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 hover:text-green-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        type='radio'
        id={`num${number}`}
        name='rating'
        value={`${number}`}
        onChange={handleClick}
      />
      <label
        className='justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer checked:bg-blue-600'
        htmlFor={`num${number}`}
      >
        {number}
      </label>
    </li>
  );
};

export default FeedbackRating;
