const Task = require('../models/Task');

// Get all tasks for a user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new task
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }

        const task = new Task({
            title,
            description: description || '',
            user: req.userId
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const taskId = req.params.id;

        const task = await Task.findOne({ _id: taskId, user: req.userId });
        
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
        task.updatedAt = Date.now();

        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        
        const task = await Task.findOneAndDelete({ _id: taskId, user: req.userId });
        
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
