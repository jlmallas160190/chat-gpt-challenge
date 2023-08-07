import ChatCompletetionItem from '@/components/molecules/ChatCompletetionItem/ChatCompletetionItem.component';
import { IChatCompletetionListProps } from './ChatCompletetionList.types';

const ChatCompletetionList = ({ conversations }: IChatCompletetionListProps) => {
  return (
    <div className="flex flex-col items-center w-full p-4 ">
      {conversations.map(({ user, assistant }, index) => (
        <div key={index} className="flex flex-col w-full gap2">
          <ChatCompletetionItem message={user} roleType="user" />
          <ChatCompletetionItem message={assistant} roleType="boot" />
        </div>
      ))}
    </div>
  );
};
export default ChatCompletetionList;
