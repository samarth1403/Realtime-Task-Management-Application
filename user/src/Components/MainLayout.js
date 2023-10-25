import React from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ isShowBell }) => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        className="text-xl"
      />
      <Header isShowBell={isShowBell} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
