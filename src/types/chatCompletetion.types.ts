export interface IMessage {
  role: string;
  content: string;
  createdAt: string;
}

export interface IConversation {
  user: IMessage;
  assistant: IMessage;
}

export interface IChatHistory {
  title?: string;
  createdAt?: string;
  conversations?: IConversation[];
}
