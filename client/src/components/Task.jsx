import React from 'react';

const Task = ({ text }) => {
  return (
    <div className='flex justify-between items-center mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg'>
      <p className='break-words w-1/2 '>{text}</p>
      <div>
        <button
          type='button'
          className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
        >
          Edit
        </button>
        <button
          type='button'
          className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline'
        >
          Done
        </button>
        <button
          type='button'
          className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
