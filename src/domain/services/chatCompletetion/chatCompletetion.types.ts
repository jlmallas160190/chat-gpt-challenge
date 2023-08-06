export interface IChatCompletetionMessage {
  role: string;
  content: string;
}
export interface IChatCompletetionPayload {
  model: string;
  messages: IChatCompletetionMessage[];
}
