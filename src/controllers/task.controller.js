import { createTaskService } from "../services/task.service.js";

export const createTask = (req, res, next) => {

    const {title} = req.body;

  const task = createTaskService(title);

  return res.status(201).json({
    success: true,
    data: task
  });

};