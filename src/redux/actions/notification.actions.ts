import { createAction } from '@reduxjs/toolkit';

export const notificationSuccess = createAction<string>('notification/success');
export const notificationError = createAction<string>('notification/error');
