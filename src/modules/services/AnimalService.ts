import { Animal, type AnimalEstructura } from "@/modules/models/Animal";
import type { AnimalType } from "@/modules/shared/types";

export function agregarAnimalServicio(
  nombre: string,
  categoria: AnimalType,
  palabraUnica: string,
  descripcion: string,
  imagen: string,
): AnimalEstructura {
  const nuevoAnimal = new Animal(nombre, categoria, palabraUnica, descripcion, imagen);
  // Aquí puedes agregar más lógica, como loguear el animal o enviarlo a una base de datos
  return nuevoAnimal;
}