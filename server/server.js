// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chat');
const taskRoutes = require('./routes/task');
const reviewRoutes = require('./routes/review');
const userRoutes = require('./routes/user');
// const mentorshipRoutes = require('./routes/mentorship');
const http = require('http');
const socketIo = require('socket.io');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

// Use the routes
app.use('/user', userRoutes);
app.use('/chat', chatRoutes);
app.use('/task', taskRoutes);
app.use('/review', reviewRoutes);
// app.use('/mentorship', mentorshipRoutes)


// Socket.io logic for real-time updates
io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Handle events when clients connect, disconnect, or perform actions
  socket.on('taskUpdate', (data) => {
    // Handle task updates
    // Broadcast the update to all connected clients
    io.emit('taskUpdate', data);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//server.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
//});
