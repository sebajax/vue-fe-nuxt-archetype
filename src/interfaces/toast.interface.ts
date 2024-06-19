// Enum Toast Type
enum EnumToastType {
  INFO = 'info',
  DARK = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

// This interface will be used in BaseToast.vue component
interface IConfigToast {
  text: string;
  type: EnumToastType;
  state?: boolean; // Optional
  timeout?: number; // Optional
  icon?: string; // Optional
  colorTimer?: string; // Optional
}

export { EnumToastType };
export type { IConfigToast };
