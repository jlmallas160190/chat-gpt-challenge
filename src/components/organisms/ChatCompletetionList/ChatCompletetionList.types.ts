export interface IChatCompletionMessage {
  role: string;
  content: string;
  createdAt: string;
}

export interface ChatCompletetionListProps {
  messages: IChatCompletionMessage[];
}
