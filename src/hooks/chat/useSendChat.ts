import { useEffect, useState } from 'react';

import { IChatFormValues } from '@/components/organisms/ChatCompletetionForm/ChatCompletetionForm.types';
import { sendChat } from '@/domain/services/chatCompletetion/chatCompletetion.service';
import { IChatCompletetionPayload } from '@/domain/services/chatCompletetion/chatCompletetion.types';
import { IConversation } from '@/types/chatCompletetion.types';
import { timeFormat } from '@/utils/formatters/times';

const useSendChat = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [conversations, setConversations] = useState<IConversation[]>([]);

  useEffect(() => {
    if (mounted) {
      setMounted(true);
    }
    return () => {
      setMounted(false);
    };
  }, [mounted]);

  const onResetConversation = () => {
    setConversations([]);
  };
  const onSubmit = async (values: IChatFormValues) => {
    setLoading(true);
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
    setLoading(false);
  };
  return { loading, onSubmit, onResetConversation, conversations };
};
export default useSendChat;
