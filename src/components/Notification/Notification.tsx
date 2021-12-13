import React, { useEffect } from 'react';
import { ReactComponent as SuccessIcon } from '../../assets/svg/check-circle.svg';
import { ReactComponent as ErrorIcon } from '../../assets/svg/error-icon.svg';
import { ReactComponent as Close } from '../../assets/svg/close-icon.svg';
import {
  CloseButton,
  NotificationBody,
  NotificationTitle,
  NotificationText,
  NotificationTitleText,
} from './Notification.styles';
import { NotificationProps } from './Notification.types';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { useAppDispatch } from '../../hooks';
import { notificationError, notificationSuccess } from '../../redux/actions';

export const Notification: React.VFC<NotificationProps> = ({
  isSuccess, message, showNotification, setShowNotification,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }
  }, [showNotification]);

  useEffect(() => {
    if (!showNotification) {
      dispatch(notificationError(''));
      dispatch(notificationSuccess(''));
    }
  }, [dispatch, showNotification]);

  const toggleNotificationHandler = () => setShowNotification(false);

  return (
    <div>
      {showNotification
        && (
          <NotificationBody isSuccess={isSuccess}>
            <NotificationTitle>
              {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
              {isSuccess
                ? <NotificationTitleText>{componentsDictionary.message.messageTitleSuccess}</NotificationTitleText>
                : <NotificationTitleText>{componentsDictionary.message.messageTitleError}</NotificationTitleText>}
              <CloseButton onClick={toggleNotificationHandler}><Close /></CloseButton>
            </NotificationTitle>
            <NotificationText>
              {message}
            </NotificationText>
          </NotificationBody>
        )}
    </div>
  );
};
