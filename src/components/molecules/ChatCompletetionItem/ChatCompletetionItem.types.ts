import { IMessage } from '@/types/chatCompletetion.types';

export interface IChatCompletetionItemProps {
  message: IMessage;
  roleType: 'user' | 'boot';
}
