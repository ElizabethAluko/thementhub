import React, { useState, useEffect } from 'react';
import Task from './Task';
import Modal from './Modal';
import AddTask from './AddTask';
import mockTasks from './mockTasks';
import io from 'socket.io-client';

const TaskList = ({ user, socket, handleAddTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  const url = `https://thementhub-lc6w.onrender.com`;


  // Function to handle the initial task data retrieval
  const fetchInitialTasks = async () => {
    try {
      // Make an API request to fetch the initial tasks
      const userId = user._id;
      const response = await fetch(url + `/task/${userId}/tasks`);
      if (response.ok) {
        const data = await response.json();
        // Update the 'tasks' state with the retrieved data
        setTasks(data);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
 
  const handleStatusChange = async (taskId) => {
    // Call edit task: handleDeleteTask(_id)
    try {
      // Task update request.
      const userId = user._id;
      const response = await fetch(url + `/task/${userId}/tasks/${taskId}`, {
        method: 'UPDATE',
	});
      alert('I reach here')
      if (response.ok) {
	alert('Task is updated Successfully!');
      } else {
	  alert('Task failed to update');
	}
     } catch (error) {
	  alert('Error updating task');
	}
    };


  useEffect(() => {
    // Fetch initial tasks on component mount
    fetchInitialTasks();

    // Listen for task updates from the server
    socket.on('taskUpdate', (data) => {
      // Depending on the action, update the task list
      if (data.action === 'create') {
        // Handle task creation
        // Add the new task to the task list
        setTasks((prevTasks) => [...prevTasks, data.newTask]);
      } else if (data.action === 'update') {
        // Handle task update
        // Find the index of the task to update
        const index = tasks.findIndex((task) => task._id === data.taskId);
        if (index !== -1) {
          // Create a new array with the updated task
          const updatedTasks = [...tasks];
          updatedTasks[index] = data.updatedTask;
          // Update 'tasks' state to reflect the updated task
          setTasks(updatedTasks);
        }
      }
    });

    return () => {
      // Clean up when the component unmounts
      socket.off('taskUpdate'); // Remove the 'taskUpdate' listener
    };
  }, [tasks, socket]);


  return (
   <div className="p-4 bg-blue-200 rounded-lg shadow-lg">
      {/* Tasks */}
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Add Task
      </button>
	{tasks._id}
      <div className="mt-4">
        {tasks.map((task) => (
            <Task
	      userId={user._id}
              key={task._id}
              task={task}
              handleStatusChange={handleStatusChange}
            />
          ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} handleAddTask={handleAddTask}>
	<AddTask userId={user._id} />
      </Modal>
    </div>
  );
};

export default TaskList;
