import React, { useEffect, useState } from 'react';
import Notification from './Notification';
import { useAppSelector } from '../../hooks';
import { selectNotification } from '../../redux/reducers';

const NotificationContainer = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const { isSuccess, successMessageText, errorMessageText } = useAppSelector(selectNotification);

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
