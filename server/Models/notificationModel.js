import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
});

//Export the model
const NotificationModel = mongoose.model("Notification", notificationSchema);
export default NotificationModel;
