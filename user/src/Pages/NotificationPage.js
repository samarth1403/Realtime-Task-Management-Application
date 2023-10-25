import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "../Components/NotificationComponents/NotificationItem";
import Spinner from "../Components/ReusableComponents/Spinner";
import { getAllNotifications } from "../features/userSlice";
import { socket } from "../socket";
import { base_url } from "../utils/base_url";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const [allNotifications, setAllNotifications] = useState([]);
  const { user, Token, isLoading } = useSelector((state) => {
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
  const NotificationList = allNotifications?.map((notification) => {
    return (
      <NotificationItem
        key={notification?.message}
        notification={notification}
      />
    );
  });
  return (
    <div>
      {!isLoading && (
        <div className="flex flex-row flex-wrap justify-center items-center p-8">
          {NotificationList}
          <div className="min-[320px]:hidden sm:hidden md:hidden lg:inline-block">
            <table>
              <thead>
                <tr>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {allNotifications?.map((notification) => (
                  <tr key={notification._message}>
                    <td>{notification.message}</td>
                    <td>{new Date(notification.date).toDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center my-8">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
