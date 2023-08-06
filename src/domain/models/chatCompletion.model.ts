export interface IChatCompletionMessage {
  role: string;
  content: string;
}

export interface IChatCompletionChoice {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface IChatCompletionUsage {
  index: number;
  message: IChatCompletionMessage;
  finish_reason: string;
}

export interface IChatCompletion {
  id: string;
  created: number;
  choices: IChatCompletionChoice[];
  usage: IChatCompletionUsage;
}
