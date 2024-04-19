import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

function TaskInput() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Enter a new task"
        className="flex-1 px-4 py-2 border-2 border-purple-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 font-poppins"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-purple-500 text-white rounded-r-md hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105 font-poppins font-bold"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
