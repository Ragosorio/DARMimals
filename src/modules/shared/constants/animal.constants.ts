import { agregarAnimalServicio } from "@/modules/services/AnimalService";
import { CATEGORIAS } from "@/modules/shared/enums";
import { type AnimalEstructura } from "@/modules/models/Animal";

export let ANIMALESDB: AnimalEstructura[] = [];

const Elefante = agregarAnimalServicio(
  "Elefante",
  CATEGORIAS.FAVORITO,
  "Grandiosos",
  "Los elefantes son los animales terrestres más grandes del planeta y pueden llegar a pesar hasta 7 toneladas; poseen una memoria extraordinaria y una capacidad emocional impresionante, ya que son capaces de llorar, jugar, reír y hasta rendir homenaje a sus muertos. Tienen un cerebro de más de 5 kilos, uno de los más grandes del reino animal, y su trompa —compuesta por más de 40,000 músculos— puede ser tan precisa como para arrancar una hoja o tan fuerte como para levantar troncos pesados. Sus orejas gigantes no solo sirven para escuchar, sino también para regular su temperatura corporal, como si fueran abanicos naturales. Los elefantes africanos y asiáticos se diferencian por el tamaño de sus orejas (los africanos las tienen mucho más grandes, con forma parecida al continente africano) y por la forma de su lomo. Además, son uno de los pocos animales que no pueden saltar, y a pesar de su tamaño, caminan en silencio gracias a la estructura acolchada de sus patas. Se comunican a través de infrasonidos que pueden viajar hasta 10 kilómetros, y tienen una gestación de 22 meses, ¡la más larga de todos los mamíferos!",
  "elefantes.webp",
);

ANIMALESDB.push(Elefante);