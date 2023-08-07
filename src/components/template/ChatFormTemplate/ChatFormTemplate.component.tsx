import { FormattedMessage, useIntl } from 'react-intl';

import PlusCircleIcon from '@/assets/icons/commons/icon-plus.svg';
import Button from '@/components/atoms/Button/Button.component';
import Typography from '@/components/atoms/Typography/Typography.component';
import ChatCompletetionForm from '@/components/organisms/ChatCompletetionForm/ChatCompletionForm.component';
import ChatCompletetionList from '@/components/organisms/ChatCompletetionList/ChatCompletetionList.component';
import useSendChat from '@/hooks/chat/useSendChat';

const ChatFormTemplate = () => {
  const { onSubmit, loading, conversations, onResetConversation } = useSendChat();
  const { formatMessage } = useIntl();

  return (
    <>
      <header
        className="flex p-4 flex-row justify-start items-center h-[64px] w-full 
        rounded-lg bg-white"
      >
        <div className="flex justify-start w-full">
          <Typography className="text-base font-semibold">
            {formatMessage({ id: 'assistant.name', defaultMessage: 'OdamaChat' })}
          </Typography>
        </div>
        <div className="flex justify-end w-full">
          <Button
            className="bg-aluxion-primary text-white flex
             flex-row p-2 h-[39px] items-center gap-2.5 rounded-md"
            handleClick={onResetConversation}
          >
            <img src={PlusCircleIcon} />
            <FormattedMessage id="chatForm.button.new"></FormattedMessage>
          </Button>
        </div>
      </header>
      <div className="flex flex-col w-full items-center">
        {<ChatCompletetionList conversations={conversations} />}
      </div>
      <footer
        className="flex flex-col p-4 border w-full border-solid border-[#cbd5e1]  h-[99px]
         justify-center items-center w-full bg-white "
      >
        <ChatCompletetionForm loading={loading} onSubmit={onSubmit} />
      </footer>
    </>
  );
};
export default ChatFormTemplate;
