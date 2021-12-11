export interface InputProps {
  label: string;
  inputName: string;
  type: string;
  icon: 'default' | 'left';
  iconURL?: string;
  isError?: boolean;
  placeholder: string;
  errorText?: string;
  inputSize: 'large' | 'small';
  isSecurePassword?: boolean;

  [x: string]: any;
}
