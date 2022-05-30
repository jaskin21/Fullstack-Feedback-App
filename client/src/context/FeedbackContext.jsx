import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // state of all feedback that has been fetch
  const [feedback, setFeedback] = useState([]);
  // state for status of edit mode
  const [editMode, setEditMode] = useState('');
  // state for disabling and enabling button
  const [btnDisabled, setBtnDisabled] = useState(true);
  //state for input validation
  const [message, setMessage] = useState('');

  // Set feedback text
  const [text, setText] = useState('');
  //Set feedback rating
  const [rating, setRating] = useState(10);

  // api link
  const api = 'http://localhost:5000';

  // useEffect for fetching all data from mongoose
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch All Feedback
  const fetchFeedback = async () => {
    try {
      const { data } = await axios.get(api + '/get-feedback');
      setFeedback(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Feedback
  const addFeedback = async (e) => {
    try {
      const { data } = await axios.post(api + '/save-feedback', {
        text,
        rating,
      });
      setText('');
      setRating(10);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete function for delete button
  const deleteFeedback = async (_id) => {
    try {
      if (window.confirm('Are you sure your want to delete?')) {
        const { data } = await axios.delete(api + '/delete-feedback', {
          data: { _id },
        });
        console.log(data);
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // conditional funtion for adding or updating feedback
  const addOrUpdateFeedback = () => {
    if (editMode !== '') {
      UpdateFeedback();
    }
    if (editMode === '') {
      addFeedback();
    }
  };

  const UpdateFeedback = async () => {
    try {
      const { data } = await axios.patch(api + '/update-feedback', {
        id: editMode,
        text,
        rating,
      });
      console.log(data);
      setText('');
      setEditMode('');
    } catch (error) {
      console.log(error);
    }
  };

  //Set item to be Updated
  const editFeedback = (_id, text, rating) => {
    setEditMode(_id);
    setText(text);
    setRating(rating);
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
        btnDisabled,
        setBtnDisabled,
        message,
        setMessage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
