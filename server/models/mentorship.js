const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorshipSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'User' },
  mentee: { type: Schema.Types.ObjectId, ref: 'User' },
  peer: { type: Schema.Types.ObjectId, ref: 'User' }, // Add a peer field for peer-to-peer relationships
  startDate: Date,
  endDate: Date,
  status: {
    type: String,
    enum: ['active', 'completed', 'pending'],
    default: 'pending',
  },
  mentorAccepted: { type: Boolean, default: false },
  menteeAccepted: { type: Boolean, default: false },
  peerAccepted: { type: Boolean, default: false }, // Flags to track acceptance
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  // Latter add other fields to support the requirements
});

module.exports = mongoose.model('Mentorship', mentorshipSchema);
