import { ChatCompletetionItemProps } from './ChatCompletetionItem.types';

const ChatCompletetionItem = ({ role }: ChatCompletetionItemProps) => {
  return (
    <div
      className="flex flex-row  items-center w-full p-4 
     gap-2.5 rounded border border-solid bg-white border-slate-300"
    >
      {role}
    </div>
  );
};
export default ChatCompletetionItem;
