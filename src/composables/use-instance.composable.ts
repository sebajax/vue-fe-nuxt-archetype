import { getCurrentInstance, type ComponentInternalInstance } from 'vue';

export const useInstance = () => {
  const vm = getCurrentInstance() as ComponentInternalInstance;
  return vm;
};
