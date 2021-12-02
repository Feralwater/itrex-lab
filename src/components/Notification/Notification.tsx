import React, { useEffect } from 'react';
import { ReactComponent as SuccessIcon } from '../../assets/svgImages/check-circle.svg';
import { ReactComponent as ErrorIcon } from '../../assets/svgImages/error-icon.svg';
import { ReactComponent as Close } from '../../assets/svgImages/close-icon.svg';
import {
  CloseButton,
  NotificationBody,
  NotificationTitle,
  NotificationText,
  NotificationTitleText,
} from './Notification.styles';
import { NotificationProps } from './Notification.types';
import dictionary from '../../dictionary/dictionary';

const Notification: React.VFC<NotificationProps> = ({
  isSuccess, message, showNotification, setShowNotification,
}) => {
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }
  }, [showNotification]);

  return (
    <div>
      {showNotification
        && (
          <NotificationBody isSuccess={isSuccess}>
            <NotificationTitle>
              {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
              {isSuccess
                ? <NotificationTitleText>{dictionary.message.messageTitleSuccess}</NotificationTitleText>
                : <NotificationTitleText>{dictionary.message.messageTitleError}</NotificationTitleText>}
              <CloseButton onClick={() => setShowNotification(false)}><Close /></CloseButton>
            </NotificationTitle>
            <NotificationText>
              {message}
            </NotificationText>
          </NotificationBody>
        )}
    </div>
  );
};

export default Notification;
