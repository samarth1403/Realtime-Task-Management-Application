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
const notificationData = [];
dotenv.config();

//bodyparser Setup
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

//cors-setup
app.use(cors());

//For refreshing the token
// app.use(cookieParser());

//Using Morgan
app.use(morgan("dev"));

const server = http.createServer(app);
const socketIO = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

//For Socket.io in Server
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("notification", async (data) => {
    console.log("Data", data);
    const newNotification = await NotificationModel.create(data);
    const notifications = await NotificationModel.find({
      user: data?.user,
    }).populate("user");

    console.log("notifications", notifications);

    notificationData.push(...notifications);

    socketIO.emit("notificationResponse", notifications);
  });
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

dbconnect();

app.use("/user", authRouter);
app.use("/task", taskRoute);

const host = "0.0.0.0";

server.listen(PORT, () => {
  console.log(`Server is Running at PORT : ${PORT}`);
});
