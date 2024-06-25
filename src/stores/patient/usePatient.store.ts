// [Imports]
import { FetchError } from 'ofetch'; // Import FetchError from ohmyfetch
// - Interface
import type { Patient } from '~/interfaces/domain/patient.domain';
import type { ResponseDomain } from '~/interfaces/domain/response.domain';
import type { TypeResponseCreatePatient } from '~/interfaces/stores/patient/patient.store.interface';
import { EnumToastType } from '~/interfaces/toast.interface';
import { useToastStore } from '~/stores/toast/useToast.store';

// This store will be used for Patient provider using an api
export const usePatientStore = defineStore('patientStore', () => {
  const { $http } = useNuxtApp();
  // [Modularity - Patient Provider]
  // - [Reactivity State]
  const patientData = shallowRef<ResponseDomain<TypeResponseCreatePatient>>();
  // - [Computed]
  const patientFetchMessage = computed(() => {
    return patientData.value?.message;
  });
  // - [Method]
  const fetchCreate = async (patient: Patient) => {
    // Access the runtime configuration
    const runtimeConfig = useRuntimeConfig();

    try {
      const response = await $http(`${runtimeConfig.public.api}/user`, {
        method: 'POST',
        body: JSON.stringify(patient),
      });

      const createdPatient =
        response as unknown as ResponseDomain<TypeResponseCreatePatient>;

      patientData.value = useCloneDeep(createdPatient);
    } catch (error: unknown) {
      if (error instanceof FetchError) {
        const fetchError =
          error.data as ResponseDomain<TypeResponseCreatePatient>;

        patientData.value = useCloneDeep(fetchError);

        return;
      }
      console.error('Error fetching data:', error);
    } finally {
      // Handle execute toast
      const { updateConfig } = useToastStore();
      updateConfig({
        text: `${patientData.value?.message}`,
        type: patientData.value?.error
          ? EnumToastType.WARNING
          : EnumToastType.SUCCESS,
        showIcon: true,
      });
    }
  };

  return { patientData, fetchCreate, patientFetchMessage };
});
