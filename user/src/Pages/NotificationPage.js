import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotificationItem from "../Components/NotificationComponents/NotificationItem";
import Spinner from "../Components/ReusableComponents/Spinner";
import { socket } from "../socket";
import { base_url } from "../utils/base_url";

const NotificationPage = ({ setIsShowBell }) => {
  const [allNotifications, setAllNotifications] = useState();

  const { isLoading, Token, user } = useSelector((state) => {
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

  useEffect(() => {
    setIsShowBell(false);
  }, []);

  useEffect(() => {
    fetchNotifications();
    socket.on("notificationResponse", (data) => {
      setAllNotifications(data);
      setIsShowBell(true);
    });
    // socket.on("notificationResponse", (data) =>
    //   console.log("DATA IN >> ", data)
    // );
  }, []);

  console.log("All NOti", allNotifications);

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
                  <tr key={notification?.message}>
                    <td>{notification?.message}</td>
                    <td>{new Date(notification?.date).toDateString()}</td>
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
