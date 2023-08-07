import { useState, createContext, ReactNode } from 'react';

import { IChatHistory } from '@/types/chatCompletetion.types';

interface IChatHistoryContext {
  index: number;
  chatHistories: IChatHistory[];
  setChatHistories(chatHistory: IChatHistory[]): void;
  setIndex(index: number): void;
  chatHistorySelected: IChatHistory;
  onSelectChatHistory(chatHistory: IChatHistory): void;
}

const defaultState = {
  index: 0,
  chatHistories: [],
  setChatHistories: () => {},
  setIndex: () => {},
  chatHistorySelected: {},
  onSelectChatHistory: () => {},
};
export const ChatHistoryContext = createContext<IChatHistoryContext>(defaultState);

const ChatHistoryProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [chatHistories, setChatHistories] = useState<IChatHistory[]>([]);
  const [chatHistorySelected, onSelectChatHistory] = useState<IChatHistory>({});
  const [index, setIndex] = useState(0);

  return (
    <ChatHistoryContext.Provider
      value={{
        chatHistories,
        setChatHistories,
        index,
        setIndex,
        chatHistorySelected,
        onSelectChatHistory,
      }}
    >
      {children}
    </ChatHistoryContext.Provider>
  );
};

export default ChatHistoryProvider;
