
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const taskSchema = require('./task');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: [String],
  jobOrCourseTitle: String,
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
  academicLevel: String,
  ageRange: String,
  availableTime: String,
  country: String,
  profilePicture: String,  // URL to the profile picture
  description: {
    bio: String,
    website: String,
    socialLinks: {
      facebook: String,
      twitter: String,
      linkedIn: String,
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
