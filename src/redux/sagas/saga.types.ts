import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

export type AsyncActionType = {
  pending: PayloadActionCreator<any>;
  fulfilled: PayloadActionCreator<any>;
  failed: PayloadActionCreator<any>;
};

export type AsyncLoginActionType =AsyncActionType & {
  me: PayloadActionCreator<any>;
};

// eslint-disable-next-line no-unused-vars
export type AnyFunction = (...rest:any) => any;
