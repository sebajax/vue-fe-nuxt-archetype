// [Imports]
// - Interface
/* interface FormData {
  name: string,
  rut: string,
  birthdate?: string,
  age: number,
  genre: string,
  nationality: string,
  address: string,
  socialSecurity: string,
  phone: string,
  altPhone: string,
  email: string,
} */
export const usePatientDataStore = defineStore('patientDataStore', () => {

  // - [Reactivity State]
  const formData = ref({
    name: '',
    rut: '',
    birthdate: undefined,
    age: 0,
    genre: '',
    nationality: 'Chile',
    address: '',
    socialSecurity: '',
    phone: '',
    altPhone: '',
    email: '',
  });

  const dataTest = ref({})

  // - [Method]

  function addDataTest(data: any){
    dataTest.value = data
  }

  function resetForm() {
    formData.value.name = '',
    formData.value.rut = '',
    formData.value.birthdate = undefined,
    formData.value.age = 0,
    formData.value.nationality = 'Chile',
    formData.value.address = '',
    formData.value.socialSecurity = '',
    formData.value.phone = '',
    formData.value.altPhone = '',
    formData.value.email = ''
  }

  return { formData, resetForm , addDataTest, dataTest};
});