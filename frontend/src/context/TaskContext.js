import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const API_BASE = 'http://localhost:5000/api';

  const fetchTasks = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/tasks`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    if (!token) return null;
    
    try {
      const response = await fetch(`${API_BASE}/tasks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
      });
      
      if (response.ok) {
        const newTask = await response.json();
        setTasks(prev => [newTask, ...prev]);
        return newTask;
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
    return null;
  };

  const updateTask = async (id, updates) => {
    if (!token) return null;
    
    try {
      const response = await fetch(`${API_BASE}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      });
      
      if (response.ok) {
        const updatedTask = await response.json();
        setTasks(prev => prev.map(task => 
          task._id === id ? updatedTask : task
        ));
        return updatedTask;
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
    return null;
  };

  const deleteTask = async (id) => {
    if (!token) return false;
    
    try {
      const response = await fetch(`${API_BASE}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setTasks(prev => prev.filter(task => task._id !== id));
        return true;
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
    return false;
  };

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const value = {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    fetchTasks
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}; 