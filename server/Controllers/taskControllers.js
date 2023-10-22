import taskModel from "../Models/taskModel.js";
import { validateMongodbId } from "../Config/validateMongodbId.js";

export const createTaskController = async (req, res) => {
  try {
    const newTask = await taskModel.create(req.body);
    res
      .status(201)
      .json({ message: "Task Created Successfully", createdTask: newTask });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllTasksController = async (req, res) => {
  try {
    const allTasks = await taskModel.find().populate("assignee");
    res.status(200).json({ message: "All Tasks Got Successfully", allTasks });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getTaskController = async (req, res) => {
  const { TaskId } = req.params;
  validateMongodbId(TaskId);
  try {
    const gotTask = await taskModel
      .findById(TaskId)
      .populate("assignee")
      .populate("creator");
    res.status(200).json({ message: "Task Got Successfully", Task: gotTask });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteTaskController = async (req, res) => {
  const { TaskId } = req.params;
  validateMongodbId(TaskId);
  try {
    await taskModel.findByIdAndDelete(TaskId);
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTaskController = async (req, res) => {
  const { TaskId } = req.params;
  validateMongodbId(TaskId);
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      { _id: TaskId },
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Task Updated Successfully", updatedTask });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
};
