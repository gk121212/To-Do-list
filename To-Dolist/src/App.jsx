import { useState } from 'react';
import './App.css'; // Import Tailwind CSS here

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl opacity-90">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">To-Do List</h1>
        <div className="mb-6 flex">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="border border-gray-300 rounded-l-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm">
              <span className="text-gray-800">{task}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;