
function errorHandler(msg: any) {
  const message = msg.$errors.map((e: any) => e.$message);
  return {
    message
  };
}
export default errorHandler;
