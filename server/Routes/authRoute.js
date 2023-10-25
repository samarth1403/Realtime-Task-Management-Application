import express from "express";
import {
  createUserController,
  getAUserController,
  loginUserController,
  updateAUserController,
  loginAdminController,
  getAllUsersController,
  deleteAUserController,
  blockAUserController,
  unblockAUserController,
} from "../Controllers/authControllers.js";
import {
  createNotificationController,
  getNotificationsController,
} from "../Controllers/notificationControllers.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register-user", createUserController);
authRouter.post("/login-user", loginUserController);
authRouter.post("/admin-login", loginAdminController);
// authRouter.get("/logout", logoutUserController);
authRouter.get("/get/all-users", authMiddleware, getAllUsersController);
authRouter.get(
  "/get/:id",
  authMiddleware,
  isAdminMiddleware,
  getAUserController
);
authRouter.delete("/delete/:id", deleteAUserController);
authRouter.put("/update-user-profile", authMiddleware, updateAUserController);

authRouter.put(
  "/block-user/:id",
  authMiddleware,
  isAdminMiddleware,
  blockAUserController
);

authRouter.put(
  "/unblock-user/:id",
  authMiddleware,
  isAdminMiddleware,
  unblockAUserController
);

authRouter.get(
  "/all-notifications/:UserId",
  authMiddleware,
  getNotificationsController
);
authRouter.post(
  "/create-notification",
  authMiddleware,
  createNotificationController
);

export default authRouter;
