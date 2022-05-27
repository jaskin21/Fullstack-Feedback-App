import React from 'react';

const Form = () => {
  return (
    <form className='flex flex-col bg-white rounded-md py-4 px-2 justify-center shadow-lg'>
      <h3 className='text-xl mt-2 text-center font-semibold text-gray-600 break-normal'>
        Hi! Welcome to task manager web app.
      </h3>
      <div className='mt-6 flex space-x-4 m-10 justify-center'>
        <input
          type='number'
          placeholder='0'
          min='0'
          className='cursor-pointer bg-gray-100 w-10 text-center rounded-md pl-2 outline-none py-2 border-2'
        />
        <input
          placeholder='write a task'
          className='bg-gray-100 rounded-md py-2 px-4 border-2 outline-none'
        />
        <button className='bg-yellow-400 px-4 rounded-md font-semibold'>
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
