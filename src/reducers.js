import { saveState } from "./localStorage";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      saveState(newState);
      return newState;
    case "DELETE_TASK":
      const updatedState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      saveState(updatedState);
      return updatedState;
    case "TOGGLE_TASK_COMPLETION":
      const toggledState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
      saveState(toggledState);
      return toggledState;
    default:
      return state;
  }
};

export default rootReducer;
