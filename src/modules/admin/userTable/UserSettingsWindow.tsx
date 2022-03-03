import React from 'react';

export interface UserSettingsWindowProps {
  userID: string
}

export const UserSettingsWindow: React.VFC<UserSettingsWindowProps> = ({ userID }) => (
  <div>
    {userID}
  </div>
);
