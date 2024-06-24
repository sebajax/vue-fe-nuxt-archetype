<script setup lang="ts">
// TODO: replace with real user Interface
interface IPatient {
  id: number;
  rut: string;
  nombre: string;
  categoría: string;
  urgencia: number;
}

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Modularity - Get Patient by ID]
// - [Reactivity State]
const patientId: number = Number(useRoute().params.id);
// TODO: replace with real user Interface
const patientInfo = ref<IPatient>({
  id: 0,
  rut: '',
  nombre: '',
  categoría: '',
  urgencia: 0,
});
// - [Methods]
function getPatientById(id: number) {
  const patients = ref(usePatients);
  // TODO: replace with data fetching logic
  patientInfo.value = patients.value.find(
    (patient: IPatient) => patient.id === id,
  ) as IPatient;
  console.log(patientInfo.value);
}
// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Detalles');
  getPatientById(patientId);
});
</script>

<template>
  <v-app>
    <!-- main content -->
    <v-container fluid class="px-3 py-8">
      <v-row>
        <BaseCard class="w-full">
          <div
            class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <!-- Personal data card -->
            <BaseTitledCard title="Antecedentes personales">
              <BaseText class="text-[20px] font-bold text-dark-text">{{
                patientInfo?.nombre
              }}</BaseText>
              <v-container class="px-0">
                <BaseTextData category="Rut" :value="patientInfo?.rut" />
                <BaseTextData
                  category="Categoría"
                  :value="String(patientInfo?.urgencia)"
                />
                <BaseTextData
                  category="Categoría"
                  :value="patientInfo?.categoría"
                />
              </v-container>
            </BaseTitledCard>
            <!-- Tags card -->
            <BaseTitledCard title="Tags">
              <BaseText>Tag_1 Tag_2 Tag_3</BaseText>
            </BaseTitledCard>
            <BaseTitledCard title="Definición plan de tratamiento">
              <BaseText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </BaseText>
              <BaseText>
                Parrafo 2: Cras elementum ultrices diam. Maecenas ligula massa,
              </BaseText>
            </BaseTitledCard>
          </div>
        </BaseCard>
      </v-row>
    </v-container>
  </v-app>
</template>
