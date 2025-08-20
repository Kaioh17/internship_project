import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskForm from './TaskForm';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Checkbox,
  IconButton,
  Fab,
  Chip,
  LinearProgress,
  Alert
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const TaskList = () => {
  const { tasks, loading, addTask, updateTask, deleteTask } = useTasks();
  const [formOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = async (taskData) => {
    await addTask(taskData);
  };

  const handleEditTask = async (taskData) => {
    if (editingTask) {
      await updateTask(editingTask._id, taskData);
      setEditingTask(null);
    }
  };

  const handleToggleComplete = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(taskId);
    }
  };

  const openEditForm = (task) => {
    setEditingTask(task);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingTask(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <LinearProgress />
          <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
            Loading tasks...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            My Tasks
          </Typography>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => setFormOpen(true)}
          >
            <AddIcon />
          </Fab>
        </Box>

        {tasks.length === 0 ? (
          <Alert severity="info">
            No tasks yet. Click the + button to add your first task!
          </Alert>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tasks.map((task) => (
              <Card key={task._id} variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Checkbox
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task)}
                      color="primary"
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                          textDecoration: task.completed ? 'line-through' : 'none',
                          color: task.completed ? 'text.secondary' : 'text.primary'
                        }}
                      >
                        {task.title}
                      </Typography>
                      {task.description && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          {task.description}
                        </Typography>
                      )}
                      <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={task.completed ? 'Completed' : 'Pending'}
                          color={task.completed ? 'success' : 'warning'}
                          size="small"
                        />
                        <Chip
                          label={`Created: ${formatDate(task.createdAt)}`}
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() => openEditForm(task)}
                    color="primary"
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteTask(task._id)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Box>

      <TaskForm
        open={formOpen}
        onClose={closeForm}
        onSubmit={editingTask ? handleEditTask : handleAddTask}
        task={editingTask}
        mode={editingTask ? 'edit' : 'add'}
      />
    </Container>
  );
};

export default TaskList; 