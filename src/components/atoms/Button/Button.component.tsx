import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  const { className, children, handleChange, disabled } = props;
  return (
    <button disabled={disabled} className={className} onClick={handleChange}>
      {children}
    </button>
  );
};
export default Button;
