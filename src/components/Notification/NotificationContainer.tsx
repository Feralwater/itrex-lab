import React, { useEffect, useState } from 'react';
import Notification from './Notification';
import { useAppSelector } from '../../hooks';

const NotificationContainer = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const isSuccess = useAppSelector((state) => state.notification.isSuccess);
  const successMessageText = useAppSelector((state) => state.notification.successMessageText);
  const errorMessageText = useAppSelector((state) => state.notification.errorMessageText);

  useEffect(() => {
    if (successMessageText || errorMessageText) {
      setShowNotification(true);
    }
  }, [successMessageText, errorMessageText]);
  return (
    <Notification
      isSuccess={isSuccess}
      message={isSuccess ? successMessageText : errorMessageText}
      showNotification={showNotification}
      setShowNotification={setShowNotification}
    />
  );
};

export default NotificationContainer;
