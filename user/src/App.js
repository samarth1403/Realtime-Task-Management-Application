import React from "react";
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
import MyTaskList from "./Components/MyTaskComponents/MyTaskList";
import MyTaskDetail from "./Components/MyTaskComponents/MyTaskDetail";

const App = () => {
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
                  <MyTaskList />
                </PrivateRoute>
              }
            />
            <Route
              path="task"
              element={
                <PrivateRoute>
                  <MyTaskDetail />
                </PrivateRoute>
              }
            />
          </Route>
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
