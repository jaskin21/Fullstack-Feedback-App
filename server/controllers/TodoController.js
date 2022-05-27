import TodoModel from '../models/TodoModel.js';

export const getTodo = async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

export const createTodo = async (req, res) => {
  const saveTodo = new TodoModel({
    text: req.body.text,
  });
  try {
    const saveItem = await saveTodo.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleteItem = await TodoModel.findByIdAndDelete(req.body);
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};

// updated the task
export const updateTodo = async (req, res) => {
  try {
    const updatedtask = await TodoModel.updateOne(
      { _id: req.body.id },
      { $set: { text: req.body.text } }
    );
    res.status(200).json(updatedtask);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};
