import { agregarAnimalServicio } from "@/modules/services/AnimalService";
import { CATEGORIAS } from "@/modules/shared/enums";
import { type AnimalEstructura } from "@/modules/models/Animal";

export let ANIMALESDB: AnimalEstructura[] = [];

const animalesRaw = [
  {
    nombre: "Elefante",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Grandiosos",
    descripcion: `Los elefantes son los animales terrestres más grandes del planeta y pueden llegar a pesar hasta 7 toneladas; poseen una memoria extraordinaria y una capacidad emocional impresionante, ya que son capaces de llorar, jugar, reír y hasta rendir homenaje a sus muertos. Tienen un cerebro de más de 5 kilos, uno de los más grandes del reino animal, y su trompa —compuesta por más de 40,000 músculos— puede ser tan precisa como para arrancar una hoja o tan fuerte como para levantar troncos pesados. Sus orejas gigantes no solo sirven para escuchar, sino también para regular su temperatura corporal, como si fueran abanicos naturales. Los elefantes africanos y asiáticos se diferencian por el tamaño de sus orejas (los africanos las tienen mucho más grandes, con forma parecida al continente africano) y por la forma de su lomo. Además, son uno de los pocos animales que no pueden saltar, y a pesar de su tamaño, caminan en silencio gracias a la estructura acolchada de sus patas. Se comunican a través de infrasonidos que pueden viajar hasta 10 kilómetros, y tienen una gestación de 22 meses, ¡la más larga de todos los mamíferos!`,
    imagen: "elefantes.webp"
  },
  {
    nombre: "Perrito",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Adorables",
    descripcion: `Los perritos, conocidos como los mejores amigos del hombre, tienen una capacidad olfativa hasta 100,000 veces más precisa que la humana. Existen más de 340 razas reconocidas, desde el Chihuahua hasta el Gran Danés. Además, tienen un órgano especial llamado órgano de Jacobson que les permite detectar feromonas. Su sentido del oído es increíblemente agudo y pueden escuchar frecuencias que los humanos no pueden. Son capaces de detectar enfermedades, identificar emociones humanas y hasta predecir epilepsias o terremotos.`,
    imagen: "perrito.webp"
  },
  {
    nombre: "Oso Polar",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Interesantes",
    descripcion: `El oso polar es uno de los depredadores más imponentes del Ártico. Su piel en realidad es negra y su pelaje transparente, lo que ayuda a absorber el calor solar. Son excelentes nadadores, capaces de recorrer más de 100 km seguidos sin descansar, y pueden alcanzar velocidades de 10 km/h en el agua. Su sentido del olfato les permite detectar focas a más de 1 km de distancia, incluso bajo capas gruesas de hielo.`,
    imagen: "oso-polar.webp"
  },
  {
    nombre: "Jirafa",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Largas",
    descripcion: `Las jirafas son los animales terrestres más altos del planeta, con cuellos que pueden medir hasta 2 metros. Su lengua mide aproximadamente 45 cm y es de color púrpura para protegerla del sol. A pesar de su altura, solo tienen siete vértebras cervicales, igual que los humanos. Sus patas traseras son más cortas que las delanteras, y su corazón puede pesar hasta 11 kilos para poder bombear sangre hasta su cabeza.`,
    imagen: "jirafa.webp"
  },
  {
    nombre: "Gatito",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Tiernos",
    descripcion: `Los gatitos tienen un oído tan agudo que pueden detectar frecuencias ultrasónicas que usan los ratones para comunicarse. Pueden saltar hasta seis veces su longitud y tienen más de 20 músculos solo en cada oreja. Su ronroneo puede tener efectos terapéuticos, ayudando a reducir el estrés y a curar huesos fracturados gracias a su frecuencia de vibración.`,
    imagen: "gatito.webp"
  },
  {
    nombre: "Tortuga",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Fuertes",
    descripcion: `Las tortugas han habitado la Tierra durante más de 200 millones de años, incluso desde antes que los dinosaurios. Algunas especies pueden vivir más de 150 años. Tienen un caparazón que forma parte de su esqueleto y está compuesto por más de 50 huesos fusionados. A pesar de su aparente lentitud, ciertas tortugas marinas pueden nadar a velocidades sorprendentes cuando están motivadas.`,
    imagen: "tortuga.webp"
  },
  {
    nombre: "Panda Rojo",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Fenomenales",
    descripcion: `El panda rojo, también conocido como "el gato de fuego", es un pequeño mamífero nativo del Himalaya y China occidental. A pesar de su nombre, no está relacionado con el panda gigante. Tiene un pulgar falso que le ayuda a trepar y sujetar bambú. Es principalmente nocturno y solitario, y utiliza su cola larga y peluda para mantener el equilibrio y abrigarse durante el frío.`,
    imagen: "panda-rojo.webp"
  },
  {
    nombre: "Nutria",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Raras",
    descripcion: `Las nutrias son mamíferos acuáticos extremadamente inteligentes que usan herramientas, como piedras, para abrir conchas. Tienen una de las pieles más densas del reino animal, con hasta un millón de pelos por centímetro cuadrado, lo que las protege del frío. Son juguetonas y sociales, y a menudo se ven flotando tomadas de la mano para no separarse mientras duermen.`,
    imagen: "nutria.webp"
  },
  {
    nombre: "Hurón",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Wow",
    descripcion: `El hurón es un pequeño mamífero domesticado desde hace siglos, usado históricamente para la caza de conejos. Tiene un sentido del olfato muy agudo y un cuerpo extremadamente flexible que le permite explorar lugares estrechos. Duermen entre 14 y 18 horas al día, y pueden reconocer a sus dueños por la voz. Además, tienen un carácter curioso y juguetón que los hace excelentes mascotas.`,
    imagen: "huron.webp"
  },
  {
    nombre: "Pingüino",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Preciosos",
    descripcion: `Los pingüinos son aves que no vuelan, pero son nadadores expertos, capaces de alcanzar velocidades de hasta 36 km/h bajo el agua. Usan sus alas como aletas y tienen glándulas especiales para eliminar la sal del mar. Algunas especies, como el emperador, sobreviven a temperaturas de -60 °C y pueden incubar huevos durante semanas sin moverse, incluso en medio de ventiscas árticas.`,
    imagen: "pinguino.webp"
  },
  {
    nombre: "Zorro",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Geniales",
    descripcion: `El zorro es un animal astuto y adaptable que puede encontrarse en casi todos los continentes. Tienen pupilas verticales como los gatos, lo que les permite ver mejor de noche. Su sentido del oído les permite detectar roedores debajo de la nieve, y son capaces de almacenar comida enterrándola para consumirla después. Son muy vocales y pueden emitir más de 40 sonidos distintos.`,
    imagen: "zorro.webp"
  },
  {
    nombre: "Oso",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Rar",
    descripcion: `Los osos son mamíferos extremadamente adaptables que pueden encontrarse en hábitats desde la tundra hasta los bosques tropicales. Tienen una excelente memoria espacial y pueden recordar sitios donde han encontrado comida años atrás. Algunos, como el oso pardo, pueden correr a velocidades de hasta 50 km/h a pesar de su tamaño. Su sentido del olfato es siete veces más agudo que el de un perro, y durante la hibernación pueden pasar meses sin comer, beber ni defecar.`,
    imagen: "oso.webp"
  },
  {
    nombre: "Tiburón",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Sangrientos",
    descripcion: `Los tiburones existen desde hace más de 400 millones de años, incluso antes que los dinosaurios. Tienen un esqueleto hecho de cartílago, lo que los hace más livianos y ágiles. Algunos pueden detectar una sola gota de sangre en millones de litros de agua y pueden percibir campos eléctricos emitidos por otros animales. Además, si pierden un diente, les vuelve a crecer: pueden producir hasta 30,000 dientes en su vida.`,
    imagen: "tiburon.webp"
  },
  {
    nombre: "Conejo",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Saltarines",
    descripcion: `Los conejos pueden girar sus orejas 180 grados para detectar peligros desde cualquier dirección. Pueden saltar hasta un metro de altura y tres de largo. Tienen una visión panorámica casi total, con puntos ciegos justo enfrente de su nariz y detrás de la cabeza. Sus dientes nunca dejan de crecer, lo que los obliga a masticar constantemente. Además, se comunican con movimientos sutiles como golpeteos de patas o movimientos de nariz.`,
    imagen: "conejo.webp"
  },
  {
    nombre: "Mono",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Feos",
    descripcion: `Los monos son mamíferos sumamente inteligentes, capaces de usar herramientas, resolver problemas complejos y hasta aprender lenguaje de señas. Tienen huellas dactilares únicas como los humanos, y algunos poseen colas prensiles que les permiten colgarse y balancearse entre árboles. Algunas especies, como los monos capuchinos, pueden recordar soluciones durante años y enseñarlas a otros miembros del grupo.`,
    imagen: "mono.webp"
  },
  {
    nombre: "Venado",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Velocez",
    descripcion: `Los venados son animales ágiles y veloces que pueden correr a más de 60 km/h para escapar de depredadores. Sus astas, presentes solo en los machos de la mayoría de las especies, se caen y regeneran cada año, lo que los convierte en uno de los tejidos de crecimiento más rápido del reino animal. Además, tienen una visión panorámica excelente y una gran sensibilidad auditiva, ideal para detectar amenazas en entornos boscosos.`,
    imagen: "venado.webp"
  },
  {
    nombre: "Ratón",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Iuu",
    descripcion: `Los ratones son roedores pequeños pero muy inteligentes, capaces de aprender laberintos complejos y recordar rutas. Tienen un olfato extremadamente sensible y pueden comunicarse mediante ultrasonidos. Sus dientes nunca dejan de crecer, y por eso los roen constantemente. Son animales sociales que viven en comunidades organizadas y tienen estructuras jerárquicas definidas.`,
    imagen: "raton.webp"
  },
  {
    nombre: "Hipopótamo",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Fuertes",
    descripcion: `Los hipopótamos, a pesar de su aspecto robusto, pueden correr más rápido que un humano promedio y son considerados uno de los animales más peligrosos de África. Pasan la mayor parte del día sumergidos en agua para mantenerse frescos. Su sudor es rosado, actúa como protector solar natural y tiene propiedades antibacterianas. Aunque parecen inofensivos, pueden abrir sus mandíbulas hasta 150 grados y romper objetos duros con facilidad.`,
    imagen: "hipopotamo.webp"
  },
  {
    nombre: "Pez Payaso",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Lindos",
    descripcion: `El pez payaso vive en simbiosis con las anémonas marinas, que los protegen con sus tentáculos urticantes. Para sobrevivir entre ellas, desarrollan una capa de mucosa especial. Curiosamente, todos los peces payaso nacen machos y pueden cambiar de sexo si es necesario en su grupo social. Son territoriales, muy fieles a su pareja y hogar, y han sido popularizados gracias a películas animadas.`,
    imagen: "pez-payaso.webp"
  },
  {
    nombre: "Hámster",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Ruedita",
    descripcion: `Los hámsters son pequeños roedores nocturnos que almacenan comida en sus mejillas extensibles para transportarla a sus madrigueras. Tienen una visión limitada, pero un gran sentido del olfato y oído. Pueden correr varios kilómetros cada noche en su rueda, y aunque parecen solitarios, tienen comportamientos muy definidos para marcar su territorio y comunicarse mediante feromonas.`,
    imagen: "hamster.webp"
  },
  {
    nombre: "Oveja",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Tristeza",
    descripcion: `Las ovejas son animales de rebaño muy sensibles a las emociones, tanto propias como de sus compañeras. Pueden reconocer rostros humanos y de otras ovejas durante años. Su lana crece indefinidamente, y una sola oveja puede producir hasta 30 kilos de lana al año. Además, tienen un campo visual de casi 270 grados, lo que les permite detectar amenazas sin mover la cabeza.`,
    imagen: "oveja.webp"
  },
  {
    nombre: "Pato",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Cuak",
    descripcion: `Los patos son aves acuáticas con la capacidad de volar grandes distancias durante la migración, en algunos casos más de 2,000 km sin detenerse. Tienen glándulas especiales que impermeabilizan sus plumas, y sus patas no tienen nervios ni vasos sanguíneos, lo que les permite nadar en aguas muy frías sin congelarse. Su famoso “cuak” tiene diferentes significados según el contexto, como alerta o llamada social.`,
    imagen: "pato.webp"
  },
  {
    nombre: "Burro",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Sherk",
    descripcion: `Los burros son animales increíblemente resistentes, capaces de cargar hasta 30% de su peso corporal. Tienen un excelente sentido del equilibrio y orientación, lo que los hace ideales para transitar terrenos difíciles. Aunque se cree que son tercos, en realidad son cautelosos e inteligentes. Sus orejas grandes les ayudan a regular la temperatura y a escuchar sonidos desde largas distancias.`,
    imagen: "burro.webp"
  },
  {
    nombre: "Rinoceronte",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Cuernudos",
    descripcion: `El rinoceronte tiene una piel tan gruesa que actúa como armadura natural, aunque es sensible a las picaduras de insectos, por eso suelen tener aves que los limpian. Su cuerno está hecho de queratina, la misma sustancia de nuestras uñas. Pueden pesar más de 2 toneladas y aún así correr a 50 km/h. Tienen una vista deficiente, pero un olfato y oído muy desarrollados.`,
    imagen: "rinoceronte.webp"
  },
  {
    nombre: "Ballena",
    categoria: CATEGORIAS.CURIOSO,
    palabraUnica: "Heiser",
    descripcion: `Las ballenas son los animales más grandes del planeta. La ballena azul puede medir hasta 30 metros y pesar más de 180 toneladas. Su corazón tiene el tamaño de un auto y su lengua pesa como un elefante. Emiten los sonidos más fuertes de la naturaleza y pueden comunicarse a través de cantos que viajan cientos de kilómetros bajo el agua. Algunas especies viven más de 100 años.`,
    imagen: "ballena.webp"
  },
  {
    nombre: "Delfines",
    categoria: CATEGORIAS.MIEDO,
    palabraUnica: "Saltarines",
    descripcion: `Los delfines son uno de los animales más inteligentes del mundo. Tienen nombres entre ellos, se reconocen en espejos y usan una compleja red de sonidos para comunicarse. Son capaces de nadar a velocidades de hasta 40 km/h y saltar varios metros fuera del agua. Además, tienen un comportamiento social muy fuerte y forman vínculos duraderos con su grupo.`,
    imagen: "delfines.webp"
  },
  {
    nombre: "Jaguar",
    categoria: CATEGORIAS.FAVORITO,
    palabraUnica: "Perfectos",
    descripcion: `El jaguar es el felino más grande de América y uno de los más fuertes del mundo. Tiene una mordida tan potente que puede perforar el cráneo de sus presas. Es un excelente nadador y suele cazar dentro del agua, a diferencia de otros felinos. Su nombre proviene del guaraní “yaguareté”, que significa “el verdadero devorador de presas”. Sus manchas, llamadas rosetas, son únicas como una huella digital.`,
    imagen: "jaguar.webp"
  }    
];

ANIMALESDB = animalesRaw.map(animal =>
  agregarAnimalServicio(
    animal.nombre,
    animal.categoria,
    animal.palabraUnica,
    animal.descripcion,
    animal.imagen
  )
);