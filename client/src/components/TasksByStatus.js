import React, { useState } from 'react';

const TasksByStatus = ({ userId }) => {
  const [status, setStatus] = useState('All');
  const [searchResults, setSearchResults] = useState([]);

  const url = `https://thementhub-lc6w.onrender.com`;

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSearch = async () => {
    alert (`The function is called with ${userId} and ${status}`);
    try {
      // API endpoint that returns tasks based on userId and status
      const response = await fetch(url + `/task/${userId}/status/${status}`);
      if (response.ok) {
        const results = await response.json();
        setSearchResults(results);
      } else {
        throw new Error(`Error fetching data: ${response.statusText}`);
	alert ('Result not ok from server');
      }
    } catch (error) {
      console.error(error.message);
      alert ('Other error');
    }
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label className="mr-2">Status:</label>
          <select
            className="border p-2 rounded"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="mt-4 shadow-md p-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b">Title</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Due Date</th>
       </tr>
       </thead>
       <tbody>
        {searchResults.map((task) => (
          <tr key={task._id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{task.title}</td>
            <td className="py-2 px-4 border-b">{task.description}</td>
            <td className="py-2 px-4 border-b">{task.status}</td>
            <td className="py-2 px-4 border-b">{task.dueDate}</td>
          </tr>
       ))}
      </tbody>
      </table>
      </div>

    </div>
  );
};

export default TasksByStatus;
