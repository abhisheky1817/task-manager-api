export const createTaskService = (title) => {
  const processedTitle = title.trim();

  const task = {
    id: Date.now(),
    title: processedTitle,
    createdAt: new Date()
  };

  return task;
};