import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockTasks } from "../Seeds/Tasks"; // ensure Task interface is exported from here
import { UUIDTypes } from "uuid";
import { Task } from "../Types";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: mockTasks,
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    edit: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((item: { id: UUIDTypes; }) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
    remove: (state, action: PayloadAction<UUIDTypes>) => {
      state.tasks = state.tasks.filter((item: { id: UUIDTypes; }) => item.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = TaskSlice.actions;
export default TaskSlice.reducer;
