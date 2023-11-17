const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { requireAuth } = require('../middlewares/authMiddleware');

// Create a new review
router.post('/reviews', requireAuth, reviewController.createReview);

// Get all reviews for a mentor
router.get('/mentors/:mentorId/reviews', reviewController.getReviewsForMentor);

// Get the average rating for a mentor
router.get('/mentors/:mentorId/average-rating', reviewController.getAverageRatingForMentor);

module.exports = router;
