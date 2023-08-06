import { ReactNode } from 'react';

export type ButtonProps = {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  handleChange?(): void;
};
