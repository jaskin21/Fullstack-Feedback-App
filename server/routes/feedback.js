import express from 'express';

const router = express.Router();

import {
  getFeedback,
  createFeedback,
  deleteFeedback,
  UpdateFeedback,
} from '../controllers/FeedbackController.js';

// Get all the item from Items
router.get('/get-feedback', getFeedback);
router.post('/save-feedback', createFeedback);
router.delete('/delete-feedback', deleteFeedback);
router.patch('/update-feedback', UpdateFeedback);

export default router;
