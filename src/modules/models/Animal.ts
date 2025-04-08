import type { AnimalType, NoSpacesString } from "@/modules/shared/types";
import { validarSinEspacios } from "@/modules/utils/validaciones";

export interface AnimalEstructura {
  nombre: string;
  categoria: AnimalType;
  palabraUnica: NoSpacesString<string>;
  descripcion: string;
  imagen: string;
}

export class Animal implements AnimalEstructura {
  nombre: string;
  categoria: AnimalType;
  palabraUnica: NoSpacesString<string>;
  descripcion: string;
  imagen: NoSpacesString<string>;
  url: string;

  constructor(
    nombre: string,
    categoria: AnimalType,
    palabraUnica: string,
    descripcion: string,
    imagen: string,
  ) {
    // Validación para asegurarse de que 'palabraUnica' no contiene espacios
    validarSinEspacios(palabraUnica);
    validarSinEspacios(imagen);

    this.nombre = nombre;
    this.categoria = categoria;
    this.palabraUnica = palabraUnica as NoSpacesString<string>;
    this.descripcion = descripcion;
    this.imagen = imagen as NoSpacesString<string>;
    this.url = `/animales/${this.nombre.toLowerCase()}`;
  }
}
