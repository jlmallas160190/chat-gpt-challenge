import { Controller } from 'react-hook-form';
import { InputTextProps } from './InputText.types';

const InputText = (props: InputTextProps) => {
  const { className, placeholder, inputType, control, ref, name, required } = props;
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      rules={{ required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <input
          onChange={onChange}
          className={className}
          ref={ref}
          type={inputType}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
        />
      )}
    />
  );
};
export default InputText;