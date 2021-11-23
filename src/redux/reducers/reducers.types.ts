export type ProfileStateType={
  id: string
  first_name: string
  last_name: string
  photo: string
  role_name: string
}
export type LoginStateType ={
  accessToken: string;
  refreshToken?: string;
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
}
