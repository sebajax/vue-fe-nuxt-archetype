// [Imports]
// - Interface
import { EnumToastType, type IConfigToast } from '~/interfaces/toast.interface';

// This store will be used for BaseToast.vue component configuration
export const useToastStore = defineStore('toastStore', () => {
  // Initial configuration
  const ToastInitConfig = {
    timeout: 3000,
    icon: 'bell',
    colorTimer: 'yellow',
  };

  // [Modularity - This is for BaseToast.vue component]
  // - [Reactivity State]
  const configToast = ref<IConfigToast>({
    text: '',
    state: false,
    type: EnumToastType.INFO,
    timeout: ToastInitConfig.timeout,
    icon: ToastInitConfig.icon,
    colorTimer: ToastInitConfig.colorTimer,
  });
  // - [Computed]
  const toastState = computed(() => {
    return configToast.value.state;
  });
  // - [Method]
  const toggleStateToast = () => {
    configToast.value.state = !configToast.value.state;
  };
  function updateConfig(newConfig: IConfigToast) {
    // Mandatory to update the state
    configToast.value.text = newConfig.text;
    configToast.value.type = newConfig.type;
    // Optional to update the other properties
    configToast.value.timeout = newConfig.timeout
      ? newConfig.timeout
      : ToastInitConfig.timeout;
    configToast.value.icon = newConfig.icon
      ? newConfig.icon
      : ToastInitConfig.icon;
    configToast.value.colorTimer = newConfig.colorTimer
      ? newConfig.colorTimer
      : ToastInitConfig.colorTimer;

    // Call toggleStateToast() to show the toast
    toggleStateToast();
  }

  return { toggleStateToast, configToast, updateConfig, toastState };
});
