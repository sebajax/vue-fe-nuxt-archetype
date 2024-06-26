function dvValidator(rut: number): string | number {
  let M = 0;
  let S = 1;
  for (; rut; rut = Math.floor(rut / 10)) {
    S = (S + rut % 10 * (9 - M++ % 6)) % 11;
  }
  return S ? S - 1 : 'k';
}

function checkRutValidator(value: string): boolean {
  if (!/^[0-9]+-[0-9kK]{1}$/.test(value)) {
    return false;
  }
  const tmp = value.split('-');
  let digv = tmp[1];
  const rut: number = Number(tmp[0]);
  
  if (digv === 'K') digv = 'k';
  const validDv = dvValidator(rut);
  return validDv.toString() === digv;
}

export { checkRutValidator };


