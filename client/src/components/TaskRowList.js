import React, { useState, useEffect } from 'react';

function TaskRowList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the server when the component mounts
    fetchTasks();

    // Set up a WebSocket connection for real-time updates
    const socket = new WebSocket('wss://your-server-url');

    socket.onmessage = (event) => {
      // Handle real-time updates here
      const updatedTask = JSON.parse(event.data);
      setTasks((prevTasks) => {
        // Update the tasks with the new task data
        const updatedTasks = prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        );
        return updatedTasks;
      });
    };

    return () => {
      // Clean up the WebSocket connection
      socket.close();
    };
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://your-api/tasks');
      if (!response.ok) {
        throw new Error('Error fetching tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskRowList;
