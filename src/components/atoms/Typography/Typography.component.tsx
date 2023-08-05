import { ITypography } from "./Typography.types";

const Typography = (props: ITypography) => {
  const { className,text } = props;
  return (
    <p className={className}>
      {text}
    </p>
  );
};
export default Typography;
