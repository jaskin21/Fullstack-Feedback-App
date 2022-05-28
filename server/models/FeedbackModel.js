import mongoose from 'mongoose';

const FeedbackSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

export default mongoose.model('Feedback', FeedbackSchema);
