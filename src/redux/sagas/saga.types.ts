import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { Dispatch, SetStateAction } from 'react';

export interface AsyncAction {
  pending: PayloadActionCreator<any>;
  fulfilled: PayloadActionCreator<any>;
  failed: PayloadActionCreator<any>;
}

export type AnyFunction = Dispatch<SetStateAction<any>>;
