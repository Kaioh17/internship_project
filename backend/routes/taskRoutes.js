const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
// const authMiddleware = require('../middleware/authMiddleware');

// All task routes require authentication
// router.use(authMiddleware);

// Get all tasks for the authenticated user
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router; 