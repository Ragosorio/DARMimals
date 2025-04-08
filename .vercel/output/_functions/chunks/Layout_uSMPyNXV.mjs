import { c as createComponent, a as createAstro, d as addAttribute, g as renderScript, b as renderTemplate, r as renderComponent, h as renderHead, i as renderSlot } from './astro/server_CKquQvPm.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

function validarSinEspacios(cadena) {
  if (/\s/.test(cadena)) {
    throw new Error(`El valor "${cadena}" no puede contener espacios.`);
  }
}

class Animal {
  nombre;
  categoria;
  palabraUnica;
  descripcion;
  imagen;
  url;
  constructor(nombre, categoria, palabraUnica, descripcion, imagen) {
    validarSinEspacios(palabraUnica);
    validarSinEspacios(imagen);
    this.nombre = nombre;
    this.categoria = categoria;
    this.palabraUnica = palabraUnica;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.url = `/animales/${this.nombre.toLowerCase()}`;
  }
}

function agregarAnimalServicio(nombre, categoria, palabraUnica, descripcion, imagen) {
  const nuevoAnimal = new Animal(nombre, categoria, palabraUnica, descripcion, imagen);
  return nuevoAnimal;
}

var CATEGORIAS = /* @__PURE__ */ ((CATEGORIAS2) => {
  CATEGORIAS2["FAVORITO"] = "Favorito";
  CATEGORIAS2["CURIOSO"] = "Curioso";
  CATEGORIAS2["MIEDO"] = "Miedo";
  return CATEGORIAS2;
})(CATEGORIAS || {});
var CLASESCSSBG = /* @__PURE__ */ ((CLASESCSSBG2) => {
  CLASESCSSBG2["FAVORITO"] = "bgGradientFavorite";
  CLASESCSSBG2["CURIOSO"] = "bgGradientCurious";
  CLASESCSSBG2["MIEDO"] = "bgGradientFear";
  return CLASESCSSBG2;
})(CLASESCSSBG || {});

let ANIMALESDB = [];
const Elefante = agregarAnimalServicio(
  "Elefante",
  CATEGORIAS.FAVORITO,
  "Grandiosos",
  "Los elefantes son los animales terrestres más grandes del planeta y pueden llegar a pesar hasta 7 toneladas; poseen una memoria extraordinaria y una capacidad emocional impresionante, ya que son capaces de llorar, jugar, reír y hasta rendir homenaje a sus muertos. Tienen un cerebro de más de 5 kilos, uno de los más grandes del reino animal, y su trompa —compuesta por más de 40,000 músculos— puede ser tan precisa como para arrancar una hoja o tan fuerte como para levantar troncos pesados. Sus orejas gigantes no solo sirven para escuchar, sino también para regular su temperatura corporal, como si fueran abanicos naturales. Los elefantes africanos y asiáticos se diferencian por el tamaño de sus orejas (los africanos las tienen mucho más grandes, con forma parecida al continente africano) y por la forma de su lomo. Además, son uno de los pocos animales que no pueden saltar, y a pesar de su tamaño, caminan en silencio gracias a la estructura acolchada de sus patas. Se comunican a través de infrasonidos que pueden viajar hasta 10 kilómetros, y tienen una gestación de 22 meses, ¡la más larga de todos los mamíferos!",
  "elefantes.webp"
);
agregarAnimalServicio(
  "Elefante",
  CATEGORIAS.FAVORITO,
  "Grandiosos",
  "Los elefantes son los animales terrestres más grandes del planeta y pueden llegar a pesar hasta 7 toneladas; poseen una memoria extraordinaria y una capacidad emocional impresionante, ya que son capaces de llorar, jugar, reír y hasta rendir homenaje a sus muertos. Tienen un cerebro de más de 5 kilos, uno de los más grandes del reino animal, y su trompa —compuesta por más de 40,000 músculos— puede ser tan precisa como para arrancar una hoja o tan fuerte como para levantar troncos pesados. Sus orejas gigantes no solo sirven para escuchar, sino también para regular su temperatura corporal, como si fueran abanicos naturales. Los elefantes africanos y asiáticos se diferencian por el tamaño de sus orejas (los africanos las tienen mucho más grandes, con forma parecida al continente africano) y por la forma de su lomo. Además, son uno de los pocos animales que no pueden saltar, y a pesar de su tamaño, caminan en silencio gracias a la estructura acolchada de sus patas. Se comunican a través de infrasonidos que pueden viajar hasta 10 kilómetros, y tienen una gestación de 22 meses, ¡la más larga de todos los mamíferos!",
  "elefantes.webp"
);
ANIMALESDB.push(Elefante);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>DARMimals</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-primary text-secondary" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ANIMALESDB as A, CATEGORIAS as C, CLASESCSSBG as a };
