import Typography from '@/components/atoms/Typography/Typography.component';
import ChatHistoryItem from '@/components/molecules/ChatHistoryItem/ChatCompletetionItem.component';
import { IChatHistory } from '@/types/chatCompletetion.types';

type ChatHistoryListProps = {
  chatHistories: IChatHistory[];
};
const ChatHistoryList = ({ chatHistories }: ChatHistoryListProps) => {
  return (
    <div className="flex flex-col w-full bg-white items-center rounded-md min-h-[400px] grow">
      <div className="border-b border-solid border-[#CBD5E1] w-full p-4">
        <Typography className="text-justify font-semibold">Historial de búsquedas</Typography>
      </div>
      {chatHistories.map((item) => (
        <ChatHistoryItem chatHistory={item} />
      ))}
    </div>
  );
};
export default ChatHistoryList;
