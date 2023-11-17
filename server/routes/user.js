const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');
const AuthMiddleware = require('../middlewares/authMiddleware');

// User Registration
router.post('/register', userController.registerUser);

// User Login
router.post('/login', userController.login);

// Password Reset to be added later
// router.post('/reset-password', userController.resetPassword);

// User Profile Management (requires authentication)
router.get('/profile', AuthMiddleware.requireAuth, userController.getUserProfile);
router.put('/profile', AuthMiddleware.requireAuth, userController.updateUserProfile);

module.exports = router;
