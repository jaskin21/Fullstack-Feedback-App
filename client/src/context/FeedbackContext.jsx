import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // state of all feedback that has been fetch
  const [feedback, setFeedback] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // Set feedback text
  const [text, setText] = useState('');
  //Set feedback rating
  const [rating, setRating] = useState(10);

  // useEffect for fetching all data from mongoose
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch All Feedback
  const fetchFeedback = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/get-feedback');
      setFeedback(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Feedback
  const addFeedback = async (e) => {
    try {
      const { data } = await axios.post('http://localhost:5000/save-feedback', {
        text,
        rating,
      });
      alert(data);
      setText('');
      setRating(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete function for delete button
  const deleteFeedback = async (_id) => {
    try {
      if (window.confirm('Are you sure your want to delete?')) {
        const { data } = await axios.delete(
          'http://localhost:5000/delete-feedback',
          {
            data: { _id },
          }
        );
        console.log(data);
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // conditional funtion for adding or updating feedback
  const addOrUpdateFeedback = () => {
    if (editMode) {
      setEditMode(false);
    }
    if (!editMode) {
      addFeedback();
    }
  };

  //Set item to be Updated
  const editFeedback = () => {
    setFeedback({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        editFeedback,
        addOrUpdateFeedback,
        setText,
        setRating,
        text,
        rating,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
