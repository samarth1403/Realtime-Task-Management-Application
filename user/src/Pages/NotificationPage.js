import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotifications } from "../features/userSlice";
import { socket } from "../socket";
import { base_url } from "../utils/base_url";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const [allNotifications, setAllNotifications] = useState([]);
  const { user, Token } = useSelector((state) => {
    return state.user;
  });
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        `${base_url}/user/all-notifications/${user?._id}`,
        {
          headers: {
            Authorization: `Bearer ${Token !== null ? Token : ""}`,
            Accept: "application/json",
          },
        }
      );
      setAllNotifications(response?.data?.allNotifications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [allNotifications]);
  useEffect(() => {
    const apidata = fetchNotifications();

    socket.on("notificationResponse", (data) =>
      setAllNotifications([...allNotifications, data])
    );
  }, []);
  console.log("All NOti", allNotifications);

  // const { allNotifications } = useSelector((state) => {
  //   return state.user;
  // });

  const notificationListArray = allNotifications?.map((notification) => {
    return (
      <div key={notification?._id}>
        <p className="my-2 text-lg">{notification?.message}</p>
        <p></p>
      </div>
    );
  });
  return <div>{allNotifications[0]?.message}</div>;
};

export default NotificationPage;
