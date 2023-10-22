import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import CreateTaskPage from "./Pages/CreateTaskPage";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import MyTaskPage from "./Pages/MyTaskPage";
import NotificationPage from "./Pages/NotificationPage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/my-tasks" element={<MyTaskPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-task" element={<CreateTaskPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
