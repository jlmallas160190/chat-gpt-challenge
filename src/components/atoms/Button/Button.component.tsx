import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  const { className, children, handleClick: handleChange, disabled } = props;
  return (
    <button disabled={disabled} className={`font-aluxion ${className}`} onClick={handleChange}>
      {children}
    </button>
  );
};
export default Button;
