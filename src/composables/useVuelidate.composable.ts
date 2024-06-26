//the error array is received from vuelidate and the message is returned.
function errorHandler(msg: any) {
  const message = msg.$errors.map((e: any) => e.$message);
  return {
    message
  };
}
export default errorHandler;
