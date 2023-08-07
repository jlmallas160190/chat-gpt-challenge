import { Control } from 'react-hook-form';

export interface IInputTextProps {
  className?: string;
  name: string;
  placeholder?: string;
  inputType?: string;
  ref?: string;
  control?: Control;
  required?: boolean;
  disabled?: boolean;
}
