import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import dbconnect from "./Config/dbConnect.js";
import authRouter from "./Routes/authRoute.js";
import taskRoute from "./Routes/taskRoute.js";
import { Server } from "socket.io";
import http from "http";
import NotificationModel from "./Models/notificationModel.js";

const app = express();

//dotenv
dotenv.config();

//bodyparser Setup
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

//cors-setup
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

//For refreshing the token
// app.use(cookieParser());

//Using Morgan
app.use(morgan("dev"));

const server = http.createServer(app);
export const socketIO = new Server(server, {
  cors: {
    origin: "https://project-flow-self.vercel.app",
  },
});

//For Socket.io in Server
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("taskCreated", async (data) => {
    const notification = await NotificationModel.create(data);
    socketIO.emit("taskCreatedResponse", notification);
  });
  socket.on("taskUpdated", async (data) => {
    const notification = await NotificationModel.create(data);
    socketIO.emit("taskUpdatedResponse", notification);
  });
  socket.on("taskDeleted", async (data) => {
    const notification = await NotificationModel.create(data);
    socketIO.emit("taskDeletedResponse", notification);
  });
  socket.on("statusUpdated", async (data) => {
    const notification = await NotificationModel.create(data);
    socketIO.emit("statusUpdatedResponse", notification);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

const PORT = process.env.PORT;

dbconnect();

app.use("/user", authRouter);
app.use("/task", taskRoute);

const host = "0.0.0.0";

server.listen(PORT, () => {
  console.log(`Server is Running at PORT : ${PORT}`);
});
