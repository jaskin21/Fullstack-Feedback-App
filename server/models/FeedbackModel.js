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
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Feedback', FeedbackSchema);
