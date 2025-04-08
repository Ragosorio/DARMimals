import { CATEGORIAS, CLASESCSSBG } from "@/modules/shared/enums";

export type AnimalType = CATEGORIAS;

export type AnimalTypeClass = CLASESCSSBG;

export type NoSpacesString<T extends string> = T extends `${infer _} ${infer _}`
  ? never
  : T;