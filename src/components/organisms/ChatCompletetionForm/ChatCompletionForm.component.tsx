import Button from '@/components/atoms/Button/Button.component';
import InputText from '@/components/atoms/Inputs/InputText/InputText.component';
import SendIcon from '@/assets/icons/commons/send.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chatFormSchema } from '@/schemas/chat/chatSendSchema';
import { ChatCompletionFormProps, IChatFormValues } from './ChatCompletetionForm.types';
import { useCallback, useEffect } from 'react';

const ChatCompletetionForm = ({ onSubmit, loading }: ChatCompletionFormProps) => {
  const { handleSubmit, control, reset } = useForm<IChatFormValues>({
    shouldUnregister: false,
    resolver: yupResolver(chatFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      content: '',
    },
  });

  const handleReset = useCallback(() => {
    reset({ content: '' });
  }, [reset]);

  useEffect(() => {
    if (loading) {
      handleReset();
    }
  }, [handleReset, loading]);

  return (
    <div
      className="flex flex-row  items-center w-full p-4 h-[40px]
     gap-2.5 rounded border-[1.5px] border-solid border-slate-300"
    >
      <InputText
        control={control}
        className="text-base font-medium w-full outline-0 leading-6 disabled:opacity-75"
        name="content"
        disabled={loading}
      />
      <Button disabled={loading} handleClick={handleSubmit(onSubmit)}>
        {loading ? (
          <div
            className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <img src={SendIcon} />
        )}
      </Button>
    </div>
  );
};
export default ChatCompletetionForm;
