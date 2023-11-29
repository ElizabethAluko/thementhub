import React, { useState, useEffect } from 'react';

const AddTask = ({ userId, task, closeModal }) => {
  // Initialize state based on the existence of the task prop
  const [title, setTitle] = useState(task ? task.title || '' : '');
  const [description, setDescription] = useState(task ? task.description || '' : '');
  const [status, setStatus] = useState(task ? task.status || 'Not Started' : 'Not Started');
  const [dueDate, setDueDate] = useState(task ? task.dueDate || '' : '');

  // const [isModalOpen, setModalOpen] = useState(true);

  const url = `https://thementhub-lc6w.onrender.com`;
    // Handle adding a task here (e.g., send the data to the server)
  const handleAddTask = async (event) => {
    event.preventDefault();
    // Create an object to hold the task data
    const newTask = {
      title,
      description,
      status,
      dueDate,
    };

  try {
    const response = await fetch(url + `/task/${userId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
   if (response.ok) {
     // Task added successfully
     alert('Task added successfully');
     // Reset form fields
     setTitle('');
     setDescription('');
     setStatus('Not Started');
     setDueDate('');
   } else {
     // Handle errors, e.g., display an error message
       const data = await response.json();
       alert(`Task add error ${data.error}`);
    }

    } catch (error) {
    // Handle network errors or other issues
    alert(`Task add failed:, ${error}`);
    }
   };

  const handleEditTask = async (event) => {
    event.preventDefault();
    const taskId = task._id
    const newTask = {title, description, status, dueDate,};
    try {
      // Task update request.
      const response = await fetch(url + `/task/${userId}/tasks/${taskId}`, {
        method: 'PUT',
	headers: {
	  'Content-Type': 'application/json',
	},
	body: JSON.stringify(newTask),
      });
        const data = await response.json()

	if (response.ok) {
	  closeModal();
	  alert('Task is updated Successfully!');
	} else {
	  alert(`Task failed to update: ${data.error}`);
	}
    } catch (error) {
          alert('Error updating task');
        }
  };

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="w-full p-2 border rounded-md"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button
	onClick={task ? handleEditTask : handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Save Task
      </button>
    </div>
  );
};

export default AddTask;
