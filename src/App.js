import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center py-12">
      <h1 className="text-5xl font-bold mb-8 text-white font-lobster">
        To-Do App
      </h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
