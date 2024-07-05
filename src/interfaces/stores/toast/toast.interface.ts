// Enum Toast Type
enum EnumToastType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  ALERT = 'alert',
}

// Interface associating enum values with icons for Toast
interface IToastTypeIconMap {
  [EnumToastType.INFO]: string;
  [EnumToastType.SUCCESS]: string;
  [EnumToastType.WARNING]: string;
  [EnumToastType.ERROR]: string;
  [EnumToastType.ALERT]: string;
}

// For triggerHttpToast only
const serverError = 'Error de servidor';

// This interface will be used in BaseToast.vue component
interface IConfigToast {
  text: string;
  type: EnumToastType;
  showIcon: boolean;
  icon?: string; // Optional
  state?: boolean; // Optional
  timeout?: number; // Optional
}

export { EnumToastType, serverError };
export type { IConfigToast, IToastTypeIconMap };
