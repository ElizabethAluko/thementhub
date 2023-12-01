const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middlewares/authMiddleware');
const taskController = require('../controllers/taskController');

// Route to create a new task
router.post('/:userId/tasks', taskController.createTaskForUser);

// Route to get all tasks
router.get('/:userId/tasks', taskController.getTasksForUser);

// Route to get a task by ID
//router.get('/tasks/:taskId', requireAuth, taskController.getTaskById);

// Route to update a task by ID
router.put('/:userId/tasks/:taskId', taskController.updateTaskForUser);

// Route to delete a task by ID
router.delete('/:userId/tasks/:taskId', taskController.deleteTaskForUser);

// Route to get tasks by status
router.get('/:userId/status/:status', taskController.getTasksByStatus);

module.exports = router;
