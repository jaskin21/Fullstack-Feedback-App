import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('TodoModel', TodoSchema);
