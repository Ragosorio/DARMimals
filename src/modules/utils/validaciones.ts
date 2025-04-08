export function validarSinEspacios(cadena: string): void {
  if (/\s/.test(cadena)) {
    throw new Error(`El valor "${cadena}" no puede contener espacios.`);
  }
}