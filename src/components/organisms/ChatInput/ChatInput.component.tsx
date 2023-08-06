import Button from '@/components/atoms/Button/Button.component';
import InputText from '@/components/atoms/Inputs/InputText/InputText.component';
import SendIcon from '@/assets/icons/commons/send.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSendChat from '@/hooks/chat/useSendChat';
import { chatFormSchema } from '@/schemas/chat/chatSendSchema';
import { IChatFormValues } from './ChatInput.types';

const ChatInput = () => {
  const { onSubmit } = useSendChat();
  const { handleSubmit, control } = useForm<IChatFormValues>({
    shouldUnregister: false,
    resolver: yupResolver(chatFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      content: '',
    },
  });

  return (
    <div
      className="flex flex-row  items-center w-full p-4 h-[40px]
     gap-2.5 rounded border-[1.5px] border-solid border-slate-300"
    >
      <InputText
        control={control}
        className="text-base font-medium w-full outline-0 leading-6"
        name="content"
      />
      <Button handleChange={handleSubmit(onSubmit)}>
        <img src={SendIcon} />
      </Button>
    </div>
  );
};
export default ChatInput;
