export type CommonResponseType<T = {}> = {
  fieldsError: Array<string>
  messages: Array<string>
  resultCode: number
  data: T
}
export type SignUpDataType = {
  userName: string
  password: string
  firstName: string
  lastName: string
}
