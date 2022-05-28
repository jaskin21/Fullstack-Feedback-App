import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedbackItem from './sub/FeedbackItem';

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <div>No Feed Back Yet</div>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
