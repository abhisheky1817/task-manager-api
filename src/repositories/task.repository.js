let tasks = [];

export const saveTask = (taskData) => {
  const newTask = {
    id: tasks.length + 1,
    ...taskData
  };

  tasks.push(newTask);

  return newTask;
};

export const getAllTasks = () => {
  return tasks;
};