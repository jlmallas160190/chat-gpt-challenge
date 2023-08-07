import { IChatCompletetionPayload } from './chatCompletetion.types';
import { IChatCompletion } from '../../models/chatCompletion.model';

import { request } from '@/clients/api';

export const sendChat = async (body: IChatCompletetionPayload): Promise<IChatCompletion> => {
  const response: IChatCompletion = await request.post<IChatCompletion>('chat/completions', body);
  return response;
};
