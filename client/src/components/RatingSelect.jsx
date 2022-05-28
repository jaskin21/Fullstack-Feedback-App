import React, { useState } from 'react';
import FeedbackRating from './sub/FeedbackRating';

const RatingSelect = () => {
  return (
    <ul className='flex flex-wrap justify-center mt-10 ml-7 mr-7 space-x-3'>
      <FeedbackRating number={1} />
      <FeedbackRating number={2} />
      <FeedbackRating number={3} />
      <FeedbackRating number={4} />
      <FeedbackRating number={5} />
      <FeedbackRating number={6} />
      <FeedbackRating number={7} />
      <FeedbackRating number={8} />
      <FeedbackRating number={9} />
      <FeedbackRating number={10} />
    </ul>
  );
};

export default RatingSelect;
