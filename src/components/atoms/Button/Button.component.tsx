import { IButton } from "./Button.types";

const Button = (props: IButton) => {
  const { className, svgIcon, text, handleChange } = props;
  return (
    <button className={className} onClick={handleChange}>
      <img src={svgIcon} />
      {text}
    </button>
  );
};
export default Button;
