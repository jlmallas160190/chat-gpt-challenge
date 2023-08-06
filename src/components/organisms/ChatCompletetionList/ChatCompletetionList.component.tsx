import ChatCompletetionItem from '@/components/molecules/ChatCompletetionItem/ChatCompletetionItem.component';
import { ChatCompletetionListProps } from './ChatCompletetionList.types';

const ChatCompletetionList = ({ messages }: ChatCompletetionListProps) => {
  console.log(messages, 'paso2');
  return (
    <div className="flex flex-row  items-center w-full p-4 ">
      {messages.map(({ content, createdAt, role }, index) => (
        <ChatCompletetionItem key={index} content={content} createdAt={createdAt} role={role} />
      ))}
    </div>
  );
};
export default ChatCompletetionList;
