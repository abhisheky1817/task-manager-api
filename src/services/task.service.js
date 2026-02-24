import { saveTask } from "../repositories/task.repository.js";

export const createTaskService = (title) => {
  if (!title || title.length < 5) {
    throw new Error("Title must be at least 5 characters");
  }

  const taskData = {
    title,
    createdAt: new Date()
  };

  const savedTask = saveTask(taskData);

  return savedTask;
};