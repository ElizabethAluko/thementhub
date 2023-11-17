const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { requireAuth } = require('../middlewares/authMiddleware');
require('dotenv').config();


// Create a new chat conversation
router.post('/chats', requireAuth, chatController.createChat);

// Get all chat conversations for the authenticated user
router.get('/chats', requireAuth, chatController.getChats);

// Get messages for a specific chat conversation
router.get('/chats/:chatId/messages', requireAuth, chatController.getMessages);

// Send a new message in a chat conversation
router.post('/chats/:chatId/messages', requireAuth, chatController.sendMessage);

// Mark messages as read in a chat conversation
router.put('/chats/:chatId/messages/mark-as-read', requireAuth, chatController.markMessagesAsRead);

module.exports = router;
