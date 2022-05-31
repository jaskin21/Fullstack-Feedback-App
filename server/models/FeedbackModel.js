import mongoose from 'mongoose';

const FeedbackSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    default: 10,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Feedback', FeedbackSchema);
