// [Imports]
// - Interface
import {
  EnumToastType,
  type IConfigToast,
  type IToastTypeIconMap,
} from '~/interfaces/toast.interface';

// This store will be used for BaseToast.vue component configuration
export const useToastStore = defineStore('toastStore', () => {
  // Icon mappings - Initial configuration
  const toastTypeIcons: IToastTypeIconMap = {
    [EnumToastType.INFO]: 'mdi-information-outline',
    [EnumToastType.SUCCESS]: 'mdi-check-circle-outline',
    [EnumToastType.WARNING]: 'mdi-alert-outline',
    [EnumToastType.ERROR]: 'mdi-close-circle-outline',
    [EnumToastType.ALERT]: 'mdi-alert-circle-outline',
  };

  // [Modularity - This is for BaseToast.vue component]
  // - [Reactivity State]
  const configToast = ref<IConfigToast>({
    text: '',
    type: EnumToastType.INFO,
    showIcon: true,
    icon: toastTypeIcons[EnumToastType.INFO],
    state: false,
    timeout: 3000,
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
    configToast.value.icon =
      newConfig.showIcon === true ? toastTypeIcons[newConfig.type] : '';
    // Optional to update the other properties
    configToast.value.timeout = newConfig.timeout ? newConfig.timeout : 3000;

    // Call toggleStateToast() to show the toast
    toggleStateToast();
  }

  return { toggleStateToast, configToast, updateConfig, toastState };
});
