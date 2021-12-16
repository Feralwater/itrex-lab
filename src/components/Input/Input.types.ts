export interface InputProps {
  label: string;
  id: string;
  type: string;
  icon: 'default' | 'left';
  iconURL?: string;
  isError?: boolean;
  placeholder: string;
  errorText?: string;
  inputSize: 'large' | 'small';
  isSecurePassword?: boolean;
  isRequire: boolean;

  [x: string]: any;
}
