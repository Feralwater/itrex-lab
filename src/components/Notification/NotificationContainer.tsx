import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks';
import { selectNotification } from 'redux/reducers';
import { Notification } from './Notification';

export const NotificationContainer = () => {
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
