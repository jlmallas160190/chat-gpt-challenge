/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_OPENAI_API_HOST: string;
  readonly VITE_OPENAI_API_SCHEME: string;
  readonly VITE_OPENAI_API_PORT: string;
  readonly VITE_OPENAI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
