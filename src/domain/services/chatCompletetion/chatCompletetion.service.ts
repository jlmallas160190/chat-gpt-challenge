import { request } from '@/clients/api';
import { IChatCompletion } from '../../models/chatCompletion.model';
import { IChatCompletetionPayload } from './chatCompletetion.types';

export const sendChat = async (body: IChatCompletetionPayload): Promise<IChatCompletion> => {
  const response: IChatCompletion = await request.post<IChatCompletion>('chat/completions', body);
  return response;
};
