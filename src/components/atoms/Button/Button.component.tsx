import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  const { className, children, handleChange } = props;
  return (
    <button className={className} onClick={handleChange}>
      {children}
    </button>
  );
};
export default Button;
