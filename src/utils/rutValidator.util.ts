/**
 * Calculates the check digit (DV) for a given RUT number.
 * @param rut The RUT number for which to calculate the DV.
 * @returns The calculated DV as either a number or 'k'.
 */
const dvValidator = (rut: number): string | number => {
  let multiplier = 0;
  let sum = 1;
  // Iterate over the digits of the RUT from right to left
  while (rut) {
    sum = (sum + (rut % 10) * (9 - (multiplier++ % 6))) % 11;
    rut = Math.floor(rut / 10);
  }
  // If sum is 1, the DV is 'k', otherwise it's sum - 1
  return sum ? sum - 1 : 'k';
};

/**
 * Validates a RUT string against its check digit.
 * @param value The RUT string in the format "number-DV".
 * @returns True if the RUT is valid, false otherwise.
 */
const checkRutValidator = (value: string): boolean => {
  // Validate the format of the RUT string
  if (!/^[0-9]+-[0-9kK]{1}$/.test(value)) {
    return false;
  }

  // Split the RUT into its number and DV parts
  const [rutStr, rutDv] = value.split('-');

  // Check if the DV is a valid number or 'k'
  if (!rutDv) {
    return false;
  }

  // Parse the RUT number and DV
  const rut: number = Number(rutStr);
  const dv: string = rutDv;

  // Normalize the DV to lowercase for comparison
  const normalizedDv = dv.toLowerCase();
  const validDv = dvValidator(rut);

  // Compare the calculated DV with the provided one
  return validDv.toString() === normalizedDv;
};

export { checkRutValidator };
