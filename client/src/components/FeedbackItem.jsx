import React from 'react';

const FeedbackItem = ({ item }) => {
  const handleDeleteItem = () => {
    console.log('delete');
  };

  return (
    <div className='relative flex justify-between items-center mt-10 bg-white pt-10 pb-6 p-6 rounded-md text-black shadow-lg'>
      <p className='break-words w-3/4 '>{item.text}</p>
      <div className=' fex flex-row'>
        <button
          type='button'
          className='border border-indigo-500 bg-indigo-500 text-black rounded-md px-4 py-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
        >
          Edit
        </button>
      </div>
      {/* Evaluation Rating */}
      <span className='absolute bg-green-500 w-12 h-12 flex items-center justify-center font-bold text-green-50 rounded-full -top-6 -left-6'>
        {item.rating}
      </span>
      {/* Evaluation Delete */}
      <button
        type='button'
        className='absolute top-0 right-0  font-bold text-red rounded-full transition h-10 w-10 p-2 duration-500 ease select-none hover:bg-red-200 focus:outline-none focus:shadow-outline'
        onClick={handleDeleteItem}
      >
        x
      </button>
    </div>
  );
};

export default FeedbackItem;
