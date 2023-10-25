import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import CreateTaskPage from "./Pages/CreateTaskPage";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import MyTaskPage from "./Pages/MyTaskPage";
import NotificationPage from "./Pages/NotificationPage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import { PrivateRoute } from "./Routing/PrivateRoute";
import MyTaskDetail from "./Components/MyTaskComponents/MyTaskDetail";
import ViewTasksPage from "./Pages/ViewTasksPage";
import ViewAllTasks from "./Components/ViewTasksComponent/ViewAllTasks";
import ViewAllStausTasks from "./Components/ViewTasksComponent/ViewAllStausTasks";
import ViewAllPriorityTasks from "./Components/ViewTasksComponent/ViewAllPriorityTasks";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "./features/taskSlice";
import ViewAllMyTasks from "./Components/ViewTasksComponent/ViewAllMyTasks";
import UpdateTask from "./Components/UpdateTask/UpdateTask";
import { getAllUsers } from "./features/userSlice";

import socketIO from "socket.io-client";
import ViewAllAssigneeTasks from "./Components/ViewTasksComponent/ViewAllAssigneeTasks";
const socket = socketIO.connect("http://localhost:3001");

const App = () => {
  const dispatch = useDispatch();
  const { Token } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(getAllTasks({ Token: Token }));
    dispatch(getAllUsers({ Token }));
  }, [Token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="my-tasks"
            element={
              <PrivateRoute>
                <MyTaskPage />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <ViewAllMyTasks />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="task/:id"
            element={
              <PrivateRoute>
                <MyTaskDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="create-task"
            element={
              <PrivateRoute>
                <CreateTaskPage />
              </PrivateRoute>
            }
          />
          <Route
            path="update-task/:id"
            element={
              <PrivateRoute>
                <UpdateTask />
              </PrivateRoute>
            }
          />
          <Route
            path="notifications"
            element={
              <PrivateRoute>
                <NotificationPage />
              </PrivateRoute>
            }
          />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="my-profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="all-tasks"
            element={
              <PrivateRoute>
                <ViewTasksPage />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <ViewAllTasks />
                </PrivateRoute>
              }
            />
            <Route
              path=":status"
              element={
                <PrivateRoute>
                  <ViewAllStausTasks />
                </PrivateRoute>
              }
            />
            <Route
              path="priority/:priority"
              element={
                <PrivateRoute>
                  <ViewAllPriorityTasks />
                </PrivateRoute>
              }
            />
            <Route
              path="assignee/:assigneeId"
              element={
                <PrivateRoute>
                  <ViewAllAssigneeTasks />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
