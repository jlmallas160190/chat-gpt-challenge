import { useContext, useEffect, useState } from 'react';

import { IChatFormValues } from '@/components/organisms/ChatCompletetionForm/ChatCompletetionForm.types';
import { ChatHistoryContext } from '@/contexts/chatHistoryContext';
import { sendChat } from '@/domain/services/chatCompletetion/chatCompletetion.service';
import { IChatCompletetionPayload } from '@/domain/services/chatCompletetion/chatCompletetion.types';
import { IChatHistory, IConversation } from '@/types/chatCompletetion.types';
import { timeFormat } from '@/utils/formatters/times';

const useSendChat = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const {
    chatHistories,
    setChatHistories,
    setIndex,
    index,
    chatHistorySelected,
    onSelectChatHistory,
  } = useContext(ChatHistoryContext);

  useEffect(() => {
    if (mounted) {
      setMounted(true);

      if (chatHistorySelected && chatHistorySelected.conversations) {
        setConversations(chatHistorySelected.conversations);
      }
    }
    return () => {
      setMounted(false);
    };
  }, [mounted, chatHistorySelected]);

  const onResetConversation = () => {
    setConversations([]);
    if (chatHistories && chatHistories.length > 0) {
      setIndex(index + 1);
    }
  };
  const onSubmit = async (values: IChatFormValues) => {
    setLoading(true);
    try {
      const body: IChatCompletetionPayload = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: values.content }],
      };
      const response = await sendChat(body);

      const messages: IConversation[] =
        response && response.choices && response.choices.length > 0
          ? response.choices.map(({ message }) => ({
              assistant: {
                ...message,
                createdAt: response.created
                  ? timeFormat.format(new Date(response.created * 1000))
                  : '',
              },
              user: {
                role: 'Jorge',
                content: values.content,
                createdAt: response.created
                  ? timeFormat.format(new Date(response.created * 1000))
                  : '',
              },
            }))
          : [];
      setConversations([...conversations, ...messages]);

      if (chatHistories && chatHistories.length == index + 1) {
        const chatHistoryEdit = chatHistories[index];
        const { conversations } = chatHistoryEdit;
        if (conversations) {
          conversations.push(...messages);
        }
      } else {
        const titles = messages ? messages.map(({ user }) => user.content) : '';
        const title = titles && titles.length > 0 ? titles[0] : '';
        const chatHistoryNew: IChatHistory = {
          id: response.id,
          title,
          createdAt: new Date(),
          conversations: messages,
        };
        onSelectChatHistory(chatHistoryNew);
        setChatHistories([...chatHistories, chatHistoryNew]);
      }
      setLoading(false);
    } catch {
      throw new Error(
        'Ha ocurrido un error al enviar la consulta. Porfavor consulte con el administrador.',
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, onSubmit, onResetConversation, conversations, setConversations };
};
export default useSendChat;
