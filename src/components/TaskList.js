// components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../actions";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center font-poppins">
          No tasks added yet.
        </p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center px-4 py-2 bg-white rounded-md mb-2 shadow-md transform transition duration-500 ${
                task.completed ? "opacity-50 line-through" : "hover:scale-105"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(task.id)}
                  className="mr-2 form-checkbox text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span
                  className={`text-gray-800 font-poppins ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.name}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-600 transition-colors duration-300 transform hover:scale-110 font-poppins font-bold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
