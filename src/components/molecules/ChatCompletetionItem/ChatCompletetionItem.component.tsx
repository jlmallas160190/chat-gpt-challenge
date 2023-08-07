import { IChatCompletetionItemProps } from './ChatCompletetionItem.types';

import Typography from '@/components/atoms/Typography/Typography.component';

const ChatCompletetionItem = ({ message, roleType }: IChatCompletetionItemProps) => {
  const { role, createdAt, content } = message;
  return (
    <div
      className="flex flex-col mb-4 w-full p-4 
     gap-2.5 rounded bg-white"
    >
      <div className="flex flex-row border-b boder-b-solid w-full gap-4 p-2 border-b-slate-500">
        <Typography
          className={`text-justify ${
            roleType === 'user' ? 'text-[#10B981]' : 'text-aluxion-primary'
          }`}
        >
          {role}
        </Typography>
        <Typography className="text-justify"> {createdAt}</Typography>
      </div>
      <div className="flex flex-row mt-2">
        <Typography className="text-justify"> {content}</Typography>
      </div>
    </div>
  );
};
export default ChatCompletetionItem;
