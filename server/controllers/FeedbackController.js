import Feedback from '../models/FeedbackModel.js';

// Fetch all feedback
export const getFeedback = async (req, res) => {
  try {
    const item = await Feedback.find().sort({ date: -1 });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

// Create feedback
export const createFeedback = async (req, res) => {
  const Item = new Feedback({
    text: req.body.text,
    rating: req.body.rating,
  });
  try {
    const saveItem = await Item.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

// Delete Feedback
export const deleteFeedback = async (req, res) => {
  try {
    const deleteItem = await Feedback.findByIdAndDelete(req.body);
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

// updated the task
export const UpdateFeedback = async (req, res) => {
  try {
    const updateItem = await Feedback.findOneAndUpdate(
      { _id: req.body.id },
      { $set: { text: req.body.text, rating: req.body.rating } }
    );
    res.status(200).json(updateItem);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};
