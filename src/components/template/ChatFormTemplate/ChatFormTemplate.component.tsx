import Button from '@/components/atoms/Button/Button.component';
import Typography from '@/components/atoms/Typography/Typography.component';
import PlusCircleIcon from '@/assets/icons/commons/icon-plus.svg';
import ChatCompletetionForm from '@/components/organisms/ChatCompletetionForm/ChatCompletionForm.component';
import useSendChat from '@/hooks/chat/useSendChat';
import ChatCompletetionList from '@/components/organisms/ChatCompletetionList/ChatCompletetionList.component';
import { IChatCompletionMessage } from '@/components/organisms/ChatCompletetionList/ChatCompletetionList.types';

const ChatFormTemplate = () => {
  const { onSubmit, loading, response } = useSendChat();
  const messages: IChatCompletionMessage[] =
    response && response.choices && response.choices.length > 0
      ? response.choices.map(({ message }) => ({
          ...message,
          createdAt: response.created,
        }))
      : [];
  return (
    <div className="flex p-4">
      {/* <div className="p-4 flex flex-row justify-start w-3/12"></div> */}
      <div
        className="flex flex-wrap  bg-slate-50 rounded-lg border
       border-solid border-gray-300  w-9/12  content-between h-[600px] grow"
      >
        <header
          className="flex p-4 flex-row justify-start items-center h-[64px] w-full 
        rounded-lg bg-white"
        >
          <div className="flex justify-start w-full">
            <Typography className="text-base font-semibold">{'OdamaChat'}</Typography>
          </div>
          <div className="flex justify-end w-full">
            <Button className="bg-aluxion-primary text-white flex flex-row p-2 h-[39px] items-center gap-2.5 rounded-md">
              <img src={PlusCircleIcon} />
              {'Nueva Búsqueda'}
            </Button>
          </div>
        </header>
        <div className="flex flex-col justify-center w-full items-center">
          {response.choices && <ChatCompletetionList messages={messages} />}
        </div>
        <footer
          className="flex flex-col p-4 border w-full border-solid border-[#cbd5e1] h-[99px]
         justify-center items-center w-full bg-white "
        >
          <ChatCompletetionForm loading={loading} onSubmit={onSubmit} />
        </footer>
      </div>
    </div>
  );
};
export default ChatFormTemplate;
