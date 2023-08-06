export interface IChatFormValues {
  content: string;
}
export type ChatCompletionFormProps = {
  loading: boolean;
  onSubmit(values: IChatFormValues): void;
};
