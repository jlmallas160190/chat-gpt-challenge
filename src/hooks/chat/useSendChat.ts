import { IChatFormValues } from '@/components/organisms/ChatInput/ChatInput.types';
import { useEffect, useState } from 'react';

const useSendChat = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (mounted) {
      setMounted(true);
    }
    return () => {
      setMounted(false);
    };
  }, [mounted]);

  const onSubmit = (values: IChatFormValues) => {
    setLoading(true);
    console.log(values);
  };
  return { loading, onSubmit };
};
export default useSendChat;
