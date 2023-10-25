import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillBellFill, BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ isShowBell }) => {
  const { user } = useSelector((state) => {
    return state.user;
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/";
    toast.info("Logged Out Successfully");
  };

  return (
    <nav>
      <div className="flex flex-row flex-wrap justify-evenly items-center py-1 shadow-md">
        <Link to="/" className="mb-2 min-[320px]:hidden sm:inline-block">
          <p className="font-roboto font-bold text-2xl">Task Manager</p>
        </Link>
        <div className=" flex flex-row flex-wrap justify-evenly items-center sm:min-w-[400px] md:min-w-[600px] mb-2">
          <Link to="/my-tasks">
            <p className="font-roboto font-medium text-xl m-2">My Tasks</p>
          </Link>
          <Link to="/dashboard">
            <p className="font-roboto font-medium text-xl m-2">Dashboard</p>
          </Link>
          <Link to="/create-task">
            <p className="font-roboto font-medium text-xl m-2">Create Task</p>
          </Link>
        </div>
        <div className="flex flex-row flex-no-wrap justify-evenly items-center mb-2">
          <Link
            to={"/"}
            className="my-2 mx-4 min-[320px]:inline-block sm:inline-block md:hidden lg:hidden xl:hidden"
          >
            <AiFillHome size={"30px"} />
          </Link>
          <Link to="/notifications" className="my-2 mx-4">
            {isShowBell && (
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "red",
                }}
              ></div>
            )}
            <BsFillBellFill size={"25px"} />
          </Link>
          <Link
            to={user === null ? "/signin" : "/my-profile"}
            className="my-2 mx-4"
          >
            {user === null ? (
              <BsFillPersonFill size={"30px"} />
            ) : (
              <div className="w-[40px] h-[40px] bg-blue-200 flex flex row justify-center items-center rounded-full">
                <p className="font-roboto font-bold text-xl text-center">
                  {user?.name?.substr(0, 1)}
                </p>
              </div>
            )}
          </Link>
          {user !== null && (
            <button
              className="font-roboto font-bold text-xl text-center mx-4"
              onClick={handleLogout}
            >
              <BiLogOutCircle size={"35px"} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
