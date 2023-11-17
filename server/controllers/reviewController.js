const Review = require('../models/review');
const Mentor = require('../models/mentorship'); // Replace with your mentor model
const User = require('../models/user'); // Replace with your user model

// Function to post a new review
exports.createReview = async (req, res) => {
  const { mentorId, rating, comment } = req.body;
  const menteeId = req.user.id; // Assuming you have an authenticated user

  try {
    // Check if the review already exists for the same mentor and mentee
    const existingReview = await Review.findOne({ mentor: mentorId, mentee: menteeId });
    if (existingReview) {
      return res.status(400).json({ error: 'You have already reviewed this mentor.' });
    }

    // Create a new review
    const review = new Review({
      mentor: mentorId,
      mentee: menteeId,
      rating,
      comment,
      createdAt: new Date(),
    });

    await review.save();

    // Update the mentor's total review (you may want to recalculate the average)
    const mentor = await Mentor.findById(mentorId);
    mentor.totalRating += rating; // Update the total rating
    mentor.totalReviews++; // Increment the total reviews count
    mentor.averageRating = mentor.totalRating / mentor.totalReviews; // Calculate the new average

    await mentor.save();

    res.status(201).json({ message: 'Review posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get all reviews for a mentor
exports.getReviewsForMentor = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    // Find all reviews for the mentor with the given ID
    const reviews = await Review.find({ mentor: mentorId });

    res.status(200).json({ reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get the average rating for a mentor
exports.getAverageRatingForMentor = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    // Find all reviews for the mentor with the given ID
    const reviews = await Review.find({ mentor: mentorId });

    if (reviews.length === 0) {
      return res.status(404).json({ error: 'No reviews found for this mentor' });
    }

    // Calculate the average rating
    let totalRating = 0;
    reviews.forEach((review) => {
      totalRating += review.rating;
    });
    const averageRating = totalRating / reviews.length;

    res.status(200).json({ averageRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
