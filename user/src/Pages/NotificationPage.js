import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "../Components/NotificationComponents/NotificationItem";
import Spinner from "../Components/ReusableComponents/Spinner";
import { getAllNotifications } from "../features/userSlice";
import { socket } from "../socket";

const NotificationPage = () => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, Token, user, allNotifications } = useSelector((state) => {
    return state.user;
  });

  const stableFetchNotifications = useCallback(() => {
    console.log("GetALLNotifications in Notification Page");
    dispatch(getAllNotifications({ Token, UserId: user?._id }));
  }, [Token, dispatch, user?._id]);

  const handleSocketEvent = (data) => {
    setNotificationsArray((prevNotifications) => [...prevNotifications, data]);
  };

  useEffect(() => {
    stableFetchNotifications();
  }, [stableFetchNotifications]);

  const stableSaveNotifications = useCallback(() => {
    console.log("SetNotifications");
    setNotificationsArray(allNotifications);
  }, [allNotifications]);

  useEffect(() => {
    stableSaveNotifications();
  }, [stableSaveNotifications]);

  useEffect(() => {
    socket.on("taskCreatedResponse", handleSocketEvent);
    socket.on("taskDeletedResponse", handleSocketEvent);
    socket.on("taskUpdatedResponse", handleSocketEvent);
    socket.on("statusUpdatedResponse", handleSocketEvent);

    return () => {
      // Clean up the event listeners when the component unmounts
      socket.off("taskCreatedResponse", handleSocketEvent);
      socket.off("taskDeletedResponse", handleSocketEvent);
      socket.off("taskUpdatedResponse", handleSocketEvent);
      socket.off("statusUpdatedResponse", handleSocketEvent);
    };
  }, []);

  const NotificationList = notificationsArray?.map((notification) => {
    return (
      <NotificationItem key={notification?._id} notification={notification} />
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
                {notificationsArray?.map((notification) => (
                  <tr key={notification?._id}>
                    <td>{notification?.message}</td>
                    <td>
                      {new Date(notification?.date).toDateString()} at{" "}
                      {new Date(notification?.date).toLocaleTimeString()}
                    </td>
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
