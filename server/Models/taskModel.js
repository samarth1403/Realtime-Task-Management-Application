import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Completed"],
    },
    priority: {
      type: String,
      enum: ["P1", "P2", "p3"],
    },
    creationDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;
