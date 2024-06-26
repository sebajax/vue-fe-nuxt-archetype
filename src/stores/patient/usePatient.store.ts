// [Imports]
// - Module
import { FetchError } from 'ofetch';
// - Interface
import type { Patient } from '~/interfaces/domain/patient.domain';
import type { ResponseDomain } from '~/interfaces/domain/response.domain';
import {
  patientResponseMapping,
  type TypeResponseCreatePatient,
} from '~/interfaces/stores/patient/patient.store.interface';
// - Store
import { useToastStore } from '~/stores/toast/useToast.store';

// This store will be used for Patient provider using an api
export const usePatientStore = defineStore('patientStore', () => {
  const { $http } = useNuxtApp();
  // [Modularity - Patient Provider]
  // - [Reactivity State]
  const patientData = shallowRef<ResponseDomain<TypeResponseCreatePatient>>();
  // - [Computed]
  const patientFetchMessage = computed(() => {
    return patientResponseMapping(patientData.value?.message || '');
  });
  // - [Method]
  const fetchCreate = async (patient: Patient) => {
    // Access the runtime configuration
    const runtimeConfig = useRuntimeConfig();

    try {
      // Call the api
      const response = await $http(`${runtimeConfig.public.api}/user`, {
        method: 'POST',
        body: JSON.stringify(patient),
      });

      // Map the response to the specific type
      const createdPatient =
        response as unknown as ResponseDomain<TypeResponseCreatePatient>;

      // Update the state with the response using a deep clone
      patientData.value = useCloneDeep(createdPatient);
    } catch (error: unknown) {
      // Handle the error if it is a FetchError
      if (error instanceof FetchError) {
        const fetchError =
          error.data as ResponseDomain<TypeResponseCreatePatient>;

        // Update the state with the error using a deep clone
        patientData.value = useCloneDeep(fetchError);

        // Exit the function
        return;
      }

      // Otherwise, log the error
      console.error('Error fetching data:', error);
    } finally {
      // Handle execute toast
      const { triggerHttpToast } = useToastStore();
      triggerHttpToast(
        patientResponseMapping(patientData.value?.message || ''),
        patientData.value?.error,
      );

      // Once message is display reset the state
      patientData.value = undefined;
    }
  };

  return { patientData, fetchCreate, patientFetchMessage };
});
