export const createTaskService = (title) => {
  const processedTitle = title.trim();

    if (processedTitle.length < 5) {
    throw new Error("Title must be at least 5 characters");
  }

  const task = {
    id: Date.now(),
    title: processedTitle,
    createdAt: new Date()
  };

  return task;
};