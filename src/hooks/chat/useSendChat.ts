import { IChatFormValues } from '@/components/organisms/ChatInput/ChatInput.types';
import { IChatCompletion } from '@/domain/models/chatCompletion.model';
import { sendChat } from '@/domain/services/chatCompletetion/chatCompletetion.service';
import { IChatCompletetionPayload } from '@/domain/services/chatCompletetion/chatCompletetion.types';
import { useEffect, useState } from 'react';

const useSendChat = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [response, setResponse] = useState<IChatCompletion>({});

  useEffect(() => {
    if (mounted) {
      setMounted(true);
    }
    return () => {
      setMounted(false);
    };
  }, [mounted]);

  const onSubmit = async (values: IChatFormValues) => {
    setLoading(true);
    const body: IChatCompletetionPayload = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'odamachat' },
        { role: 'user', content: values.content },
      ],
    };
    const response = await sendChat(body);
    setResponse(response);
    setLoading(false);
  };
  return { loading, onSubmit, response };
};
export default useSendChat;
