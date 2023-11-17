const Mentorship = require('../models/mentorship');
const Chat = require('../models/chat');

// Create a new mentor request
exports.createMentorRequest = async (req, res) => {
  try {
    const { mentor, mentee, startDate, endDate } = req.body;

    const mentorship = new Mentorship({
      mentor,
      mentee,
      startDate,
      endDate,
      status: 'pending',
    });

    await mentorship.save();

    res.status(201).json({ message: 'Mentor request created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating mentor request' });
  }
};

// Accept mentor requests
exports.acceptMentorRequest = async (req, res) => {
  try {
    const { mentorId } = req.params;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ error: 'Mentor request not found' });
    }

    mentor.status = 'active';
    await mentor.save();

    res.status(200).json({ message: 'Mentor request accepted' });
  } catch (error) {
    res.status(500).json({ error: 'Error accepting mentor request' });
  }
};

// Send and retrieve mentor chat messages
exports.sendMessage = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { text } = req.body;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ error: 'Mentor request not found' });
    }

    const newMessage = new Chat({
      text,
      sender: req.user.id,
      mentorship: mentorId,
    });

    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending chat message' });
  }
};

// Get all mentorships for a user
exports.getMentorsForUser = async (req, res) => {
  try {
    const mentors = await Mentor.find({
      $or: [{ mentor: req.user.id }, { mentee: req.user.id }],
    });

    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving mentors' });
  }
};

// Get mentor details
exports.getMentorDetails = async (req, res) => {
  try {
    const { mentorId } = req.params;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ error: 'Mentor request not found' });
    }

    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving mentor details' });
  }
};

// Update mentor status
exports.updateMentorStatus = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { status } = req.body;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ error: 'Mentor request not found' });
    }

    mentor.status = status;
    await mentor.save();

    res.status(200).json({ message: 'Mentor status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating mentor status' });
  }
};

// Get messages in a mentorship
exports.getMessage = async (req, res) => {
  try {
    const { mentorId } = req.params;

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ error: 'Mentor request not found' });
    }

    const messages = await Chat.find({ mentorship: mentorId });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving mentor messages' });
  }
};

// Get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json({ mentors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
