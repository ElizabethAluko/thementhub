const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Function to save a new user during registration
exports.registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role, jobOrCourseTitle} = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      jobOrCourseTitle,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // You may want to generate and send a JWT token for user authentication

    res.status(201).json(savedUser);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Function to handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the provided email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // If email and password are valid, generate a JWT token
    const usertoken = {
      _id: user._id,
    };

   const token = jwt.sign(usertoken, process.env.JWT_SECRET, {expiresIn: '72h',});

    res.status(200).json({ token, firstName: user.firstName, _id: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Function to get the user's profile
exports.getUserProfile = async (req, res) => {
  try {
    // Retrieve the user's profile based on the authenticated user (from req.user)
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user's profile information
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Function to update the user's profile
exports.updateUserProfile = async (req, res) => {
  try {
    // Retrieve the user to update based on the authenticated user (from req.user)
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user profile information
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.description = req.body.description;
    user.interest = req.body.interest;
    user.jobRole = req.body.jobRole;
    user.academicLevel = req.body.academicLevel;
    user.ageRange = req.body.ageRange;
    user.availableTime = req.body.availableTime;
    user.country = req.body.country;

    // Save the updated user profile
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other user-related functions (e.g., change password, delete account, etc.) will be added latter

