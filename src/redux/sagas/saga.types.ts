import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

export interface AsyncAction {
  pending: PayloadActionCreator<any>;
  fulfilled: PayloadActionCreator<any>;
  failed: PayloadActionCreator<any>;
}

export interface ProfileAction {
  me: PayloadActionCreator<any>;
}

// eslint-disable-next-line no-unused-vars
export type AnyFunction = (...rest:any) => any;
