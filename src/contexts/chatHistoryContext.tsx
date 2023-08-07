import { useState, createContext, ReactNode } from 'react';

import { IChatHistory } from '@/types/chatCompletetion.types';

interface IChatHistoryContext {
  index: number;
  chatHistories: IChatHistory[];
  setChatHistories(chatHistory: IChatHistory[]): void;
  setIndex(index: number): void;
}

const defaultState = {
  index: 0,
  chatHistories: [],
  setChatHistories: () => {},
  setIndex: () => {},
};
export const ChatHistoryContext = createContext<IChatHistoryContext>(defaultState);

const ChatHistoryProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [chatHistories, setChatHistories] = useState<IChatHistory[]>([]);
  const [index, setIndex] = useState(0);

  return (
    <ChatHistoryContext.Provider value={{ chatHistories, setChatHistories, index, setIndex }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};

export default ChatHistoryProvider;
