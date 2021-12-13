import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { put } from 'redux-saga/effects';
import { AnyFunction, AsyncAction } from './saga.types';
import { notificationError } from '../actions';
import { createErrorNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';

function* utils(action: AsyncAction, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.fulfilled(result));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
      statusCode: error.response.status,
    };
    yield put(action.failed(errorSerialized));
    yield put(notificationError(createErrorNotificationMessage(errorSerialized.statusCode)));
  }
}

export default utils;
