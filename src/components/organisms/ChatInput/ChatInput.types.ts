export interface IChatFormValues {
  content: string;
}
export type ChatInputProps = {
  loading: boolean;
  onSubmit(values: IChatFormValues): void;
};
