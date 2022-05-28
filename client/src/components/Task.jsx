import React from 'react';

const Task = ({ text, remove, update }) => {
  return (
    <div className='relative flex justify-between items-center mt-6 bg-white pt-10 p-6 rounded-md text-black shadow-lg'>
      <p className='break-words w-3/5 '>{text}</p>
      <div>
        <button
          type='button'
          className='border border-indigo-500 bg-indigo-500 text-black rounded-md px-4 py-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
          onClick={update}
        >
          Edit
        </button>
        <button className='  border-green-500 bg-green-500 text-black rounded-md px-4 py-2 m-2  '>
          Rating: 10
        </button>
      </div>

      {/* exit */}
      <button
        type='button'
        className='absolute top-0 right-0  font-bold text-red rounded-full transition h-10 w-10 p-2 duration-500 ease select-none hover:bg-red-200 focus:outline-none focus:shadow-outline'
        onClick={remove}
      >
        x
      </button>
    </div>
  );
};

export default Task;
