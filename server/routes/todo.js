import express from 'express';

const router = express.Router();

import {
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../controllers/TodoController.js';

// Get all the item from Items
router.get('/get-todo', getTodo);
router.post('/save-todo', createTodo);
router.post('/delete-todo', deleteTodo);
router.put('/update-todo', updateTodo);

export default router;
