import { ITypography } from './Typography.types';

const Typography = (props: ITypography) => {
  const { className, children } = props;
  return <p className={`font-aluxion ${className}`}>{children}</p>;
};
export default Typography;
