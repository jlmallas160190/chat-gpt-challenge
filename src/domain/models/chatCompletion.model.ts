export interface IChatCompletionMessage {
  role: string;
  content: string;
}

export interface IChatCompletionChoice {
  index: number;
  message: IChatCompletionMessage;
  finish_reason: string;
}

export interface IChatCompletionUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface IChatCompletion {
  id?: string;
  created?: number;
  choices?: IChatCompletionChoice[];
  usage?: IChatCompletionUsage;
}
