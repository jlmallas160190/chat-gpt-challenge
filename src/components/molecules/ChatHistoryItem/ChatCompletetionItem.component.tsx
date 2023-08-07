import { useContext, useState } from 'react';

import CloseIcon from '@/assets/icons/commons/close.svg';
import CheckIcon from '@/assets/icons/commons/confirmOk.svg';
import HourIcon from '@/assets/icons/commons/hour.svg';
import SearchIcon from '@/assets/icons/commons/search.svg';
import TrashIcon from '@/assets/icons/commons/trash.svg';
import Button from '@/components/atoms/Button/Button.component';
import Typography from '@/components/atoms/Typography/Typography.component';
import { ChatHistoryContext } from '@/contexts/chatHistoryContext';
import { IChatHistory } from '@/types/chatCompletetion.types';

type ChatHistoryItemProps = {
  chatHistory: IChatHistory;
};
const ChatHistoryItem = ({ chatHistory }: ChatHistoryItemProps) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { setChatHistories } = useContext(ChatHistoryContext);
  const onConfirmDelete = () => {
    setConfirmDelete(true);
  };
  const onConfirmDeleteClose = () => {
    setConfirmDelete(false);
  };
  const onConfirmDeleteOk = () => {
    setChatHistories([]);
  };
  return (
    <div className="flex flex-row mb-4 items-center w-full p-4 gap-2.5 hover:bg-[#FFEDD5] ">
      <Button className="bg-[#FDBA74] flex items-center rounded-full p-2 gap-2 ">
        <img src={SearchIcon} />
      </Button>
      <div className="flex flex-col w-full justify-items-start">
        <Typography className="font-medium leading-normal text-[#1E293B]">
          {chatHistory.title}
        </Typography>
        <div className="flex flex-row gap-2">
          <img src={HourIcon} />
          <Typography className="text-xs text-slate-400">{chatHistory.createdAt}</Typography>
        </div>
      </div>
      <div className={`flex flex-row  gap-2 ${confirmDelete ? 'visible' : 'invisible'}`}>
        <Button handleClick={onConfirmDeleteOk}>
          <img src={CheckIcon} />
        </Button>
        <Button handleClick={onConfirmDeleteClose}>
          <img src={CloseIcon} />
        </Button>
      </div>
      <div className={`flex flex-row  gap-2 ${confirmDelete ? 'invisible' : 'visible'}`}>
        <Button handleClick={onConfirmDelete}>
          <img src={TrashIcon} />
        </Button>
      </div>
    </div>
  );
};
export default ChatHistoryItem;
