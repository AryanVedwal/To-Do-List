let nextTaskId = 0;

export const addTask = (taskName) => ({
  type: "ADD_TASK",
  payload: {
    id: nextTaskId++,
    name: taskName,
    completed: false, 
  },
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: {
    id,
  },
});

export const toggleTaskCompletion = (id) => ({
  type: "TOGGLE_TASK_COMPLETION",
  payload: {
    id,
  },
});
