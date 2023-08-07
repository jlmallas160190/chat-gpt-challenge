import { IMessage } from '@/types/chatCompletetion.types';

export interface ChatCompletetionItemProps {
  message: IMessage;
  roleType: 'user' | 'boot';
}
