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
  id?: string;
  title?: string;
  createdAt?: Date;
  conversations?: IConversation[];
}
