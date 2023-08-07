export interface IMessage {
  role: string;
  content: string;
  createdAt: string;
}

export interface IConversation {
  user: IMessage;
  assistant: IMessage;
}
