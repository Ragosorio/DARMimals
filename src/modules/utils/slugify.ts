export function slugify(text: string): string {
  return text
    .normalize("NFD") // separa letras de tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina las tildes
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // reemplaza espacios por guiones
    .replace(/[^\w\-]+/g, "") // elimina cualquier cosa rara
    .replace(/\-\-+/g, "-"); // evita guiones múltiples
}
