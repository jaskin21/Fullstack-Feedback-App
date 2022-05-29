import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <div className='relative flex justify-between items-center mt-10 bg-white pt-10 pb-6 p-6 rounded-md text-black shadow-lg shadow-2xl'>
      <p className='break-words w-3/4 '>{item.text}</p>
      <div className=' fex flex-row'>
        <button
          type='button'
          className='border border-indigo-500 bg-indigo-500 text-black rounded-md px-4 py-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
          onClick={() => {
            editFeedback(item);
          }}
        >
          Edit
        </button>
      </div>
      {/* Evaluation Rating */}
      <span className=' shadow-2xl absolute bg-green-500 w-10 h-10 flex items-center justify-center font-bold text-green-50 rounded-full -top-2 -left-2'>
        {item.rating}
      </span>
      {/* Evaluation Delete */}
      <button
        type='button'
        className='absolute top-2 right-2  font-bold text-red rounded-full transition h-10 w-10 p-2 duration-500 ease select-none hover:bg-red-200 focus:outline-none focus:shadow-outline'
        onClick={() => deleteFeedback(item._id)}
      >
        x
      </button>
    </div>
  );
};

export default FeedbackItem;
