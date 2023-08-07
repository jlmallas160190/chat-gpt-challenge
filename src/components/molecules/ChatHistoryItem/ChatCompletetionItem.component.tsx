import moment from 'moment';
import 'moment/locale/es';
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
import { overflowText } from '@/utils/formatters/strings';

type ChatHistoryItemProps = {
  chatHistory: IChatHistory;
};
const ChatHistoryItem = ({ chatHistory }: ChatHistoryItemProps) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const { setChatHistories, onSelectChatHistory, chatHistories, chatHistorySelected } =
    useContext(ChatHistoryContext);

  const onConfirmDelete = () => {
    setConfirmDelete(true);
  };
  const onConfirmDeleteClose = () => {
    setConfirmDelete(false);
  };
  const onConfirmDeleteOk = () => {
    const histories = [...chatHistories];

    const index = histories.findIndex((item) => item.id === chatHistory.id);

    if (index != -1) {
      const chatHistoryFound = histories[index];
      if (chatHistoryFound && chatHistoryFound.id === chatHistorySelected.id) {
        onSelectChatHistory({ conversations: [] });
      }
      histories.splice(index, 1);
      setChatHistories(histories);
    }
    setConfirmDelete(false);
  };
  const onConfirmEdit = () => {
    setConfirmEdit(true);
  };
  const onConfirmEditClose = () => {
    setConfirmEdit(false);
  };

  const onConfirmEditOk = () => {
    onSelectChatHistory(chatHistory);
    setConfirmEdit(false);
  };
  return (
    <div className="flex flex-row mb-4 items-center w-full p-4 gap-2.5 hover:bg-[#FFEDD5] ">
      <Button
        disabled={confirmDelete}
        handleClick={onConfirmEdit}
        className="bg-[#FDBA74] flex items-center rounded-full p-2 gap-2"
      >
        <img src={SearchIcon} />
      </Button>

      <div className="flex flex-col w-full justify-items-start">
        <Typography className="font-medium leading-normal text-[#1E293B]">
          {overflowText(chatHistory.title || '')}
        </Typography>
        <div className="flex flex-row gap-2">
          <img src={HourIcon} />
          <Typography className="text-xs text-slate-400">
            {chatHistory.createdAt ? moment(chatHistory.createdAt).locale('es').fromNow() : ''}
          </Typography>
        </div>
      </div>

      <div className={`flex flex-row  gap-2 ${confirmDelete ? 'visible' : 'invisible'}`}>
        <Button handleClick={onConfirmDeleteOk}>
          <img width={40} height={40} src={CheckIcon} />
        </Button>
        <Button handleClick={onConfirmDeleteClose}>
          <img width={40} height={40} src={CloseIcon} />
        </Button>
      </div>
      <div className={`flex flex-row  gap-2 ${confirmEdit ? 'visible' : 'invisible'}`}>
        <Button handleClick={onConfirmEditOk}>
          <img width={40} height={40} src={CheckIcon} />
        </Button>
        <Button handleClick={onConfirmEditClose}>
          <img width={40} height={40} src={CloseIcon} />
        </Button>
      </div>
      <div
        className={`flex flex-row  gap-2 ${confirmDelete || confirmEdit ? 'invisible' : 'visible'}`}
      >
        <Button handleClick={onConfirmDelete}>
          <img width={40} height={40} src={TrashIcon} />
        </Button>
      </div>
    </div>
  );
};
export default ChatHistoryItem;
