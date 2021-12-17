import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { put } from 'redux-saga/effects';
import { AnyFunction, AsyncAction } from './saga.types';

export function* utils(action: AsyncAction, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.fulfilled(result));
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
  }
}

export function createErrorNotificationMessage(message: string) {
  const errorMessage = message.replace('message: ', '');
  return errorMessage[0].toUpperCase() + errorMessage.slice(1);
}
