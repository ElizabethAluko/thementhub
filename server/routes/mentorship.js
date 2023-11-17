const express = require('express');
const Auth = require('../middlewares/authMiddleware');
const router = express.Router();
const mentorshipController = require('../controllers/mentorshipController');

// Route to create a new mentorship request
router.post('/mentorships', Auth.requireAuth, mentorshipController.createMentorRequest);

// Route to accept mentorship requests (mentor, mentee, or peer)
router.put('/mentorships/:mentorshipId/accept', Auth.requireAuth, mentorshipController.acceptMentorRequest);

// Route to send and retrieve mentorship chat messages
router.post('/mentorships/:mentorshipId/messages', Auth.requireAuth, mentorshipController.sendMessage);
router.get('/mentorships/:mentorshipId/messages', Auth.requireAuth, mentorshipController.getMessage);

// Get all mentorships for a user
router.get('/mentorships', Auth.requireAuth, mentorshipController.getMentorsForUser);

// Get mentorship details
router.get('/mentorships/:mentorshipId', Auth.requireAuth, mentorshipController.getMentorDetails);

// Update mentorship status
router.put('/mentorships/:mentorshipId/status', Auth.requireAuth, mentorshipController.updateMentorStatus);

// Send a message in a mentorship
router.post('/mentorships/:mentorshipId/messages', Auth.requireAuth, mentorshipController.getAllMentors);
