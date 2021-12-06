export interface Options {
  value: string;
  label: string;
}

export interface CustomSelectPropsType {
  labelText: string;
  id: string;
  name: string;
  options: Options;
  placeholder: string;
  [x: string]: any;
}

export interface LabelType {
  label: string;
}

export interface InputValueType {
  inputValue: string;
}
