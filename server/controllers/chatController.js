const mongoose = require('mongoose');
const Chat = require('../models/chat');
const User = require('../models/user');

// Function to create a new chat conversation
exports.createChat = async (req, res) => {
  try {
    const { participants } = req.body;

    const newChat = new Chat({
      participants,
    });

    await newChat.save();

    res.status(201).json({ message: 'Chat conversation created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get all chat conversations for the authenticated user
exports.getChats = async (req, res) => {
  try {
    const userId = req.user._id;

    const chats = await Chat.find({ participants: userId });

    res.status(200).json({ chats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get messages for a specific chat conversation
exports.getMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ error: 'Chat conversation not found' });
    }

    const messages = chat.messages;

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to send a new message in a chat conversation
exports.sendMessage = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const userId = req.user._id;
    const { text } = req.body;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ error: 'Chat conversation not found' });
    }

    // Ensure the user is part of this chat conversation
    if (!chat.participants.includes(userId)) {
      return res.status(403).json({ error: 'You are not a participant in this chat' });
    }

    const newMessage = {
      sender: userId,
      text,
    };

    chat.messages.push(newMessage);
    await chat.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to mark messages as read in a chat conversation
exports.markMessagesAsRead = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const userId = req.user._id;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ error: 'Chat conversation not found' });
    }

    // Ensure the user is part of this chat conversation
    if (!chat.participants.includes(userId)) {
      return res.status(403).json({ error: 'You are not a participant in this chat' });
    }

    // Mark all messages in the chat as read by the user
    chat.messages.forEach((message) => {
      if (message.sender !== userId) {
        message.read = true;
      }
    });

    await chat.save();

    res.status(200).json({ message: 'Messages marked as read' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
