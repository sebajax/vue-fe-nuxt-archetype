// The error array is received from vuelidate and the message is returned.
export const useErrorHandler = (msg: any) => {
  const message = msg.$errors.map((e: any) => e.$message);
  return {
    message,
  };
};
