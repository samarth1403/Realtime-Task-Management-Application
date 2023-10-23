import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const MyTaskDetail = () => {
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <div className="flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[300px] sm:w-[500px] md:w-[700px] my-8 p-4 shadow-md shadow-blue-500">
        <div className="flex flex-row flex-wrap justify-between items-center min-[320px]:w-[280px] sm:w-[480px] md:w-[680px] px-2 mb-4">
          <p className="font-roboto text-xl font-medium py-2 w-[50%]">
            This is the title of Task
          </p>
          <div className="flex flex-row flex-no-wrap justify-betweeen items-center py-2">
            <button className="mx-6">
              <BiEdit size={"25px"} />
            </button>
            <button>
              <AiFillDelete size={"25px"} className="text-red-500" />
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-no-wrap justify-center items-start min-[320px]:w-[270px] sm:w-[460px] md:w-[660px] px-4 py-2 mb-4 shadow-md border border-gray-200 ">
          <p className="font-roboto text-lg font-normal py-2">
            This is the description of Task
          </p>
          <p className="font-roboto text-lg font-normal py-2">
            Status -{" "}
            <span className="font-roboto text-lg font-medium py-2">Open</span>
          </p>
          <p className="font-roboto text-lg font-normal py-2">
            Priority -{" "}
            <span className="font-roboto text-lg font-medium py-2">P1</span>
          </p>
          <div className="flex flex-row flex-wrap justify-between items-center md:w-[500px]">
            <p className="font-roboto text-lg font-normal py-2">
              Creation Date -{" "}
              <span className="font-roboto text-lg font-medium py-2">
                23-10-23
              </span>
            </p>
            <p className="font-roboto text-lg font-normal py-2">
              Due Date -{" "}
              <span className="font-roboto text-lg font-medium py-2">
                23-10-23
              </span>
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center md:w-[500px]">
            <p className="font-roboto text-lg font-normal py-2">
              Assignee -{" "}
              <span className="font-roboto text-lg font-medium py-2">
                Samarth Ikkalaki
              </span>
            </p>
            <p className="font-roboto text-lg font-normal py-2">
              Creator-{" "}
              <span className="font-roboto text-lg font-medium py-2">
                Girish Pawar
              </span>
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center md:w-[580px]">
            <div className="font-roboto text-lg font-normal py-2 flex flex-row flex-wrap justify-start items-center">
              <p className="font-roboto text-lg font-normal py-2">
                Change Staus :{" "}
              </p>
              <select
                className="border border-gray-500 min-[320px]:w-[170px] sm:w-[170px] h-[40px] font-roboto font-[400] text-md rounded-[15px] px-4 pr-8 m-2"
                id="status"
                type="text"
                name="status"
                // value={formik.values.status}
                // onChange={formik.handleChange("status")}
                // onBlur={formik.handleBlur("status")}
              >
                <option value="">Select Status</option>
                <option value={"Open"}>Open</option>
                <option value={"In Progress"}>In Progress</option>
                <option value={"Completed"}>Completed</option>
              </select>
            </div>
            <div className="font-roboto text-lg font-normal py-2 flex flex-row flex-wrap justify-start items-center">
              <p className="font-roboto text-lg font-normal py-2">
                Change Priority :{" "}
              </p>
              <select
                className="border border-gray-500 min-[320px]:w-[100px] sm:w-[100px] h-[40px] font-roboto font-[400] text-md rounded-[15px] px-4 pr-8 m-2"
                id="priority"
                type="text"
                name="priority"
                // value={formik.values.priority}
                // onChange={formik.handleChange("priority")}
                // onBlur={formik.handleBlur("priority")}
              >
                <option value="">Select Priority</option>
                <option value={"P1"}>P1</option>
                <option value={"P2"}>P2</option>
                <option value={"P3"}>P3</option>
              </select>
            </div>
          </div>
        </div>
        <button type="button" className="bg-blue-500 px-4 py-2 rounded-md">
          <p className="font-roboto text-md">Save</p>
        </button>
      </div>
    </div>
  );
};

export default MyTaskDetail;
