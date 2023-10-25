import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationItem from "../Components/NotificationComponents/NotificationItem";
import Spinner from "../Components/ReusableComponents/Spinner";
import { getAllNotifications } from "../features/userSlice";
import { socket } from "../socket";

const NotificationPage = () => {
  const [notificationsArray, setNotificationsArray] = useState();
  const dispatch = useDispatch();
  const { isLoading, Token, user, allNotifications } = useSelector((state) => {
    return state.user;
  });

  const stableFetchNotifications = useCallback(() => {
    dispatch(getAllNotifications({ Token, UserId: user?._id }));
  }, [Token, dispatch, user?._id]);

  useEffect(() => {
    stableFetchNotifications();
  }, [stableFetchNotifications]);

  const stableEffect = useCallback(() => {
    // const fetchNotifications = async () => {
    //   // try {
    //   //   // const response = await axios.get(
    //   //   //   `${base_url}/user/all-notifications/${user?._id}`,
    //   //   //   {
    //   //   //     headers: {
    //   //   //       Authorization: `Bearer ${Token !== null ? Token : ""}`,
    //   //   //       Accept: "application/json",
    //   //   //     },
    //   //   //   }
    //   //   // );
    //   //   dispatch(getAllNotifications({ Token, UserId: user?._id }));
    //   //   setNotificationsArray(allNotifications);
    //   // } catch (error) {
    //   //   console.log(error);
    //   // }
    //   dispatch(getAllNotifications({ Token, UserId: user?._id }));
    // };
    // fetchNotifications();
    setNotificationsArray(allNotifications);
    socket.on("notificationResponse", (data) => {
      setNotificationsArray((prevNotifications) => [
        ...prevNotifications,
        data,
      ]);
    });
  }, [allNotifications]);

  useEffect(() => {
    stableEffect();
  }, [stableEffect]);

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
