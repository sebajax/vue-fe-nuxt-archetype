import type { ConfigToast } from "~/interfaces/toast.interface";

export const useToastStore = defineStore('toastStore', () => {
  
  const configToast = ref<ConfigToast>({
    text: "Test data store",
    state: false,
    type: "info", // info | success | warning | error
    timeout: 3000,
    icon: 'bell',
    colorTimer: "yellow"
  })

  const toggleStateToast = () => {
    configToast.value.state = !configToast.value.state
  };

  const toastState = computed(()=>{
    return configToast.value.state;
  })

  function updateConfig(newConfig: ConfigToast){
    configToast.value.text = newConfig.text
    configToast.value.state = newConfig.state
    configToast.value.type = newConfig.type
    configToast.value.timeout = newConfig.timeout
    configToast.value.icon = newConfig.icon
    configToast.value.colorTimer = newConfig.colorTimer
  }

  return { toggleStateToast, configToast, updateConfig, toastState}

});
