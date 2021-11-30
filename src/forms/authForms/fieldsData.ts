import Input from '../../components/Input/Input';

const signInFieldsData = [
  {
    component: Input,
    name: 'email',
    inputName: 'email',
    label: '',
    type: 'email',
    placeholder: 'Email',
    icon: 'left',
    iconURL: 'svgImages/email.svg',
  },
  {
    component: Input,
    name: 'password',
    inputName: 'password',
    label: '',
    placeholder: 'Password',
    type: 'password',
    icon: 'left',
    iconURL: 'svgImages/lock.svg',
  },
];

export default signInFieldsData;
