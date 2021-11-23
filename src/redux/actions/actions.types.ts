import { SignUpInResponseType } from '../../resources/auth/auth.types';

export type LoginPendingType = { userName: string; password: string };
export type LoginFulfilledType = SignUpInResponseType;
