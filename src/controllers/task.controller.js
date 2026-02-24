import { createTaskService } from "../services/task.service";

export const createTask = (req, res) => {
  
    try{
    const {title} = req.body;

    if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required"
    });
  }

  const task = createTaskService(title);

  return res.status(201).json({
    success: true,
    data: task
  });

  }catch(error){
    return res.status(400).json({
        success: false,
        message: error.message
    });
  }

};