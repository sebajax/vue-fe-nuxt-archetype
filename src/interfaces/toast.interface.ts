export interface ConfigToast {
  text: string | null;
  state: boolean;
  type?: string;
  timeout?: number;
  icon?: string | null;
  colorTimer?: string;
}