import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import SendIcon from '@/assets/icons/commons/send.svg';
import Button from '@/components/atoms/Button/Button.component';
import InputText from '@/components/atoms/Inputs/InputText/InputText.component';
import Typography from '@/components/atoms/Typography/Typography.component';
import { chatSearchSchema } from '@/schemas/chat/chatSearchSchema';

const ChatHistorySearch = () => {
  const { formatMessage } = useIntl();
  const { control } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(chatSearchSchema),
    mode: 'onSubmit',
    defaultValues: {
      search: '',
    },
  });
  return (
    <div className="flex p-4 flex-col mb-4 w-full gap-2.5 max-h-[229px] rounded bg-white">
      <Typography className="text-justify font-semibold text-xl not-italic">
        {formatMessage({ id: 'chatHistorySearch.title', defaultMessage: 'Sistema' })}
      </Typography>
      <Typography className="text-justify text-[#64748B] font-noraml not-italic">
        {formatMessage({
          id: 'chatHistorySearch.subtitle',
          defaultMessage:
            'Para conseguir una respuesta adecuada a tus necesidades, escribe un promt en el sistema.',
        })}
      </Typography>
      <div
        className="flex flex-row mt-[33px] items-center w-full p-4 h-[40px]
     gap-2.5 rounded border-[1.5px] border-solid border-slate-300"
      >
        <InputText
          placeholder="Insertar prompt"
          control={control}
          className="text-base font-medium w-full outline-0 leading-6 disabled:opacity-75"
          name="search"
        />
        <Button>
          <img src={SendIcon} />
        </Button>
      </div>
    </div>
  );
};
export default ChatHistorySearch;
