import { Controller } from 'react-hook-form';
import { IInputTextProps } from './InputText.types';

const InputText = (props: IInputTextProps) => {
  const { className, placeholder, inputType, control, ref, name, required, disabled } = props;
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
          disabled={disabled}
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
