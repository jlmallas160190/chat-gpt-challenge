import ChatCompletetionItem from '@/components/molecules/ChatCompletetionItem/ChatCompletetionItem.component';
import { ChatCompletetionListProps } from './ChatCompletetionList.types';

const ChatCompletetionList = ({ conversations }: ChatCompletetionListProps) => {
  return (
    <div className="flex flex-col items-center w-full p-4 ">
      {conversations.map(({ user, assistant }, index) => (
        <div key={index} className="flex flex-col gap2">
          <ChatCompletetionItem message={user} roleType="user" />
          <ChatCompletetionItem message={assistant} roleType="boot" />
        </div>
      ))}
    </div>
  );
};
export default ChatCompletetionList;
