import React, { useState } from 'react';

const RatingSelect = () => {
  const [selected, setSelected] = useState(1);

  const handleClick = (event) => {
    console.log(e.value);
    console.log('jaskin');
  };

  return (
    <div className='flex flex-wrap justify-center mt-10 space-x-3'>
      <ul>
        <li className='ralative'>
          <input
            className='m-1  w-10 h-10 form-check-input appearance-none rounded-full  border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 hover:text-green-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='radio'
            id='num1'
            name='rating'
            value='4'
          />
          <label className='absolute' htmlFor='num1'>
            1
          </label>
        </li>
      </ul>
      <option
        onClick={() => handleClick()}
        value='1'
        className=' flex items-center justify-center  bg-gray-200 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover: cursor-pointer'
      >
        1
      </option>
      <option
        onClick={() => handleClick()}
        value='2'
        className='m-1 flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-green-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer checked:bg-blue-600'
      >
        2
      </option>
    </div>
  );
};

export default RatingSelect;
