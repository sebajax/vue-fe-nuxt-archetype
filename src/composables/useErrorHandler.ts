// The vee-validate error is received and the message
// is returned to be configured in the vuetify component.

interface State {
  errors: string[];
}

const useErrorHandler = (state: State) => ({
  props: {
    'error-messages': state.errors,
  },
});

export { useErrorHandler };
